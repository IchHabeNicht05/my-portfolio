import React, { useState, useEffect, useRef } from 'react';
import './TerminalIntro.css';

// --- TYPEWRITER ---
const Typewriter = ({ text, speed = 15, onComplete }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!text) return;
    
    setDisplayText(''); 
    let i = 0;

    const timer = setInterval(() => {
      i++;
      setDisplayText(text.slice(0, i));

      if (i >= text.length) {
        clearInterval(timer);
        if (onComplete) {
            setTimeout(onComplete, 500); 
        }
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, onComplete]);

  return <span>{displayText}</span>;
};

// --- DATA: BOOTOVACÍ SEKVENCE ---
const BOOT_SEQUENCE = [
  "BIOS (c) 1998 American Megatrends Inc.",
  "Check System Health ................ OK",
  "Initializing Video Adapter ......... OK",
  "Loading Kernel ..................... Done",
  "Mounting Volumes ................... /dev/sda1",
  " ", 
  "$ ./portfolio_init.sh --verbose", // Opraveno, aby se nepletlo s inputem
  "Loading Assets ..................... [||||||||||] 100%",
  "Verifying User Permissions ......... Pending",
  "Establishing Secure Connection ..... OK",
  " ",
  "SYSTEM HALTED.",
  "AUTHENTICATION REQUIRED.",
  "TYPE 'start' TO ACCESS INTERFACE."
];

// --- DATA: ÚSPĚŠNÁ SEKVENCE (Po napsání start) ---
const SUCCESS_SEQUENCE = [
  "PASSWORD ACCEPTED.",
  "DECRYPTING SECURE DATA...",
  "INITIALIZING INTERFACE...",
  "ACCESS GRANTED.",
  "WELCOME."
];

const TerminalIntro = ({ onComplete }) => {
  const [lines, setLines] = useState([BOOT_SEQUENCE[0]]);
  const [input, setInput] = useState('');
  const [showInput, setShowInput] = useState(false);
  
  // Stavy
  const [isExiting, setIsExiting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [processingSuccess, setProcessingSuccess] = useState(false); // Nový stav pro druhou fázi
  
  const inputRef = useRef(null);
  const endRef = useRef(null);

  // --- HLAVNÍ LOGIKA ŘETĚZENÍ ---
  const handleLineFinished = () => {
    // 1. FÁZE: Bootování (před zadáním příkazu)
    if (!processingSuccess) {
      if (lines.length < BOOT_SEQUENCE.length) {
        setLines(prev => [...prev, BOOT_SEQUENCE[lines.length]]);
      } else {
        setShowInput(true); // Konec bootu, ukaž input
      }
    } 
    // 2. FÁZE: Úspěch (po zadání start)
    else {
      // Spočítáme, kolik řádků z SUCCESS_SEQUENCE už jsme vypsali
      // (Celkový počet řádků mínus Boot sekvence mínus 1 za uživatelský input)
      const currentSuccessIndex = lines.length - (BOOT_SEQUENCE.length + 1);

      if (currentSuccessIndex < SUCCESS_SEQUENCE.length) {
        // Přidáme další řádek z úspěšné sekvence
        setLines(prev => [...prev, SUCCESS_SEQUENCE[currentSuccessIndex]]);
      } else {
        // Vše vypsáno -> Spustíme animaci vypnutí
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 800);
        }, 800); // Pauza než se vypne obrazovka
      }
    }
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'auto' });
    if (showInput && !isExiting) inputRef.current?.focus();
  }, [lines, showInput, isExiting]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const command = input.trim().toLowerCase();
      
      // Přidáme uživatelský vstup do historie
      setLines(prev => [...prev, `> ${input}`]); 
      setInput('');

      if (['start', 'boot', 'run', 'init'].includes(command)) {
        setIsSuccess(true);      // Zelená barva
        setShowInput(false);     // Schováme input
        setProcessingSuccess(true); // Přepneme logiku na Success sekvenci
        
        // Ručně spustíme PRVNÍ řádek úspěšné sekvence.
        // O zbytek se postará handleLineFinished
        setLines(prev => [...prev, SUCCESS_SEQUENCE[0]]);

      } else if (command === 'help') {
        setLines(prev => [...prev, "AVAILABLE COMMANDS: start, help"]);
      } else if (command === 'cls' || command === 'clear') {
         setLines([]); // Pozor: toto vymaže historii, ale logika bootu už je hotová
      } else {
        setLines(prev => [...prev, `Error: Command '${command}' not found. Try 'start'.`]);
      }
    }
  };

  return (
    <div className={`terminal-overlay ${isExiting ? 'fade-out' : ''}`} onClick={() => inputRef.current?.focus()}>
      
      <h1 className="terminal-title">REMOTE ACCESS TERMINAL</h1>

      <div className="monitor-casing">
        <div className="monitor-bezel-top"></div>

        <div className={`crt-screen ${isSuccess ? 'success-state' : ''} ${isExiting ? 'turn-off' : ''}`}>
          <div className="screen-scanlines"></div>
          <div className="screen-glow"></div>
          
          <div className="terminal-content">
            {lines.map((line, index) => {
              const isLastLine = index === lines.length - 1;
              // Animujeme pokud: je to poslední řádek A (není input NEBO se zpracovává success fáze)
              // A není to řádek uživatele (začíná ">")
              const shouldAnimate = isLastLine && (!showInput || processingSuccess) && !line.startsWith(">");

              return (
                <div key={index} className="term-line">
                   {shouldAnimate ? (
                     <Typewriter 
                        text={line} 
                        speed={15} 
                        onComplete={handleLineFinished} 
                     />
                   ) : (
                     <span>{line || <br/>}</span>
                   )}
                </div>
              );
            })}

            {showInput && (
              <div className="input-line">
                <span className="prompt">{">"}</span>
                <span className="cmd-text">{input}</span>
                <span className="blinking-cursor">█</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="hidden-input"
                  autoComplete="off"
                  autoFocus
                />
              </div>
            )}
            <div ref={endRef} />
          </div>
        </div>

        <div className="monitor-chin">
          <div className="brand-logo">SONY <span className="model">TRINITRON</span></div>
          <div className="power-indicator">
            <span className={`led-light ${isExiting ? 'off' : 'on'}`}></span>
            <span className="power-text">POWER</span>
          </div>
        </div>
      </div>
      <div className="monitor-shadow"></div>
    </div>
  );
};

export default TerminalIntro;