export const BLOG_POSTS = {
  "1": {
    title: "Jak na 60FPS animace v Reactu",
    tag: "Tech",
    date: "12. Duben 2026",
    readTime: "6 min čtení",
    author: "Martin Habenicht",
    role: "Frontend Developer",
    content: `
      <p>Dosáhnout naprosto plynulých animací v Reactu vyžaduje hluboké pochopení toho, jak prohlížeč vykresluje stránku. Klíčem je vyhnout se zbytečným re-renderům a nechat pracovat GPU.</p>
      
      <h2>Motion Values a jejich magie</h2>
      <p>Použití <code>Motion Values</code> ve Framer Motion umožňuje aktualizovat vlastnosti elementů bez toho, aby React musel procházet celý svůj diffing algoritmus. To je naprostý game-changer pro interakce závislé na scrollu nebo pohybu myši.</p>
      
      <blockquote>"Vizuální plynulost není jen o estetice, ale o pocitu absolutní kontroly nad uživatelským rozhraním."</blockquote>
      
      <h2>Základní pravidla pro 60FPS:</h2>
      <ul>
        <li>Animujte pouze <code>transform</code> (translate, scale, rotate) a <code>opacity</code>.</li>
        <li>Vyhněte se animování šířky (width), výšky (height) nebo marginů, které spouštějí drahý reflow.</li>
        <li>Využívejte hardwarovou akceleraci.</li>
      </ul>

      <pre><code>import { useMotionValue, motion } from "framer-motion";\n\nconst y = useMotionValue(0);\n// Tento hook nezpůsobí re-render komponenty\n// při každé změně hodnoty y!</code></pre>

      <p>Pokud dodržíte tato pravidla, vaše animace poběží jako po másle i na slabších mobilních zařízeních.</p>
    `
  },
  "2": {
    title: "Psychologie barev v SaaS produktech",
    tag: "Design",
    date: "5. Duben 2026",
    readTime: "6 min čtení",
    author: "Martin Habenicht",
    role: "UI/UX Designer",
    content: `
      <p>Barvy nejsou jen estetickou volbou, ale silným nástrojem pro ovlivňování emocí a chování uživatelů. V SaaS (Software as a Service) produktech, kde se uživatelé často pohybují v komplexních rozhraních plných dat, mohou správně zvolené barvy dramaticky zvýšit konverze, snížit kognitivní zátěž a posílit důvěru ve vaši značku.</p>
      
      <h2>Emocionální dopad a funkční barvy</h2>
      <p>Každá barva vyvolává podvědomou reakci. V kontextu webových aplikací ale barvy plní i důležitou funkční roli a pomáhají uživateli rychle se orientovat:</p>
      <ul>
        <li><strong>Modrá:</strong> Symbolizuje důvěru, bezpečí a profesionalitu. Není náhodou, že ji jako primární barvu používají giganti jako Stripe, PayPal nebo většina bankovních aplikací.</li>
        <li><strong>Zelená:</strong> Představuje růst, úspěch a potvrzení. Je to ultimátní barva pro "Save" tlačítka nebo toast notifikace o úspěšném dokončení akce.</li>
        <li><strong>Červená:</strong> Přitahuje pozornost a křičí "pozor". Měla by být vyhrazena pouze pro destruktivní akce (např. smazání účtu) nebo kritické chybové hlášky.</li>
      </ul>

      <h2>Zlaté pravidlo 60-30-10</h2>
      <p>Pokud nevíte, jak barvy v aplikaci vyvážit, pomůže vám toto klasické designové pravidlo. <strong>60 %</strong> rozhraní by měla tvořit dominantní barva (často neutrální pozadí), <strong>30 %</strong> sekundární barva (panely, karty, boční menu) a pouze <strong>10 %</strong> by měla zabírat akcentní barva (hlavní CTA tlačítka, aktivní stavy, důležité odkazy). Tím zabráníte vizuálnímu chaosu a navedete oko uživatele přesně tam, kam potřebujete.</p>
      
      <h2>Přístupnost (A11y) a čitelnost</h2>
      <p>Nejenže musí být barvy vizuálně přitažlivé, ale musí splňovat i standardy WCAG pro kontrast (např. minimální poměr 4.5:1 pro běžný text). Dalším klíčovým pravidlem přístupnosti je <strong>nikdy nespoléhat pouze na barvu</strong> k předání informace. Pokud máte chybovou hlášku u formuláře, neudělejte ji jen červenou – přidejte k ní i varovnou ikonku a jasný textový popis. Uživatelé s barvoslepostí vám poděkují.</p>

      <h2>Dark Mode a design tokeny</h2>
      <p>Dnes už je Dark Mode (tmavý motiv) v SaaS aplikacích prakticky standardem. Problém je, že barvy z vašeho světlého motivu většinou nebudou na tmavém pozadí fungovat správně – budou příliš zářit nebo naopak zaniknou. Řešením je systematické použití <strong>Design Tokens</strong> (např. přes CSS proměnné), které vám umožní definovat, jak se konkrétní sémantické barvy chovají v různých motivech, a udržet tak konzistenci napříč celým produktem.</p>
    `
  },
  "3": {
    title: "Optimalizace Lighthouse skóre na 100",
    tag: "Performance",
    date: "28. Březen 2026",
    readTime: "8 min čtení",
    author: "Martin Habenicht",
    role: "Web Performance Expert",
    content: `
      <p>Dosáhnout na magickou stovku v Google Lighthouse je snem mnoha vývojářů. Nejde ale jen o zelené číslo pro vaše ego – dokonale rychlý web znamená prokazatelně nižší míru okamžitého opuštění (bounce rate) a vyšší konverze. Jak se tam ale dostat v moderní aplikaci?</p>
      
      <h2>Zkroťte Core Web Vitals</h2>
      <p>Google se dnes soustředí na metriky, které odrážejí reálný uživatelský zážitek. Zaměřte se primárně na LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift) a INP (Interaction to Next Paint).</p>
      
      <blockquote>"Skóre 100 v Lighthouse není cílová páska, je to vedlejší produkt toho, že stavíte weby, které respektují čas a baterii vašich uživatelů."</blockquote>
      
      <h2>Optimalizace obrázků a médií</h2>
      <p>Obrázky jsou často největším žroutem dat na stránce. Zde se ztrácí nejvíce bodů. Co musíte bezpodmínečně udělat:</p>
      <ul>
        <li><strong>Moderní formáty:</strong> Zapomeňte na JPG a PNG. Podávejte obrázky ve formátech WebP nebo ideálně AVIF.</li>
        <li><strong>Lazy Loading:</strong> Vše pod zlomem stránky (below the fold) musí mít atribut <code>loading="lazy"</code>.</li>
        <li><strong>Prevence CLS:</strong> Vždy definujte atributy <code>width</code> a <code>height</code> u tagu <code>&lt;img&gt;</code>, aby prohlížeč vyhradil místo ještě před stažením obrázku.</li>
      </ul>

      <h2>JavaScript: Přítel i nepřítel</h2>
      <p>Příliš mnoho blokujícího JS kódu spolehlivě zabije váš hlavní thread a zhorší metriky. Řešením je code splitting a odložení nedůležitých skriptů.</p>

      <pre><code>&lt;!-- Místo klasického blokujícího skriptu --&gt;\n&lt;script src="bundle.js" defer&gt;&lt;/script&gt;</code></pre>

      <p>Triviální atribut <code>defer</code> zajistí, že stahování skriptu probíhá na pozadí a jeho spuštění se odloží až na moment, kdy je HTML plně parsované. Pokud k tomu přidáte agresivní cachování na úrovni CDN, vaše stovky v Lighthouse na sebe nenechají dlouho čekat.</p>
    `
  },
  "4": {
    title: "Proč jsem přešel z Reduxu na Zustand",
    tag: "Architecture",
    date: "20. Březen 2026",
    readTime: "7 min čtení",
    author: "Martin Habenicht",
    role: "React Architect",
    content: `
      <p>Správa stavu (state management) v Reactu prošla za poslední roky obrovským vývojem. Zatímco dříve byl Redux jasnou volbou pro většinu větších aplikací, dnes už existují mnohem elegantnější řešení.</p>
      
      <h2>Konec zbytečného boilerplate kódu</h2>
      <p>Největší bolestí Reduxu bylo vždy množství kódu, které jste museli napsat, abyste změnili jedinou hodnotu. Akce, reducery, dispatchery... Zustand tento proces osekává na absolutní minimum.</p>
      
      <blockquote>"Nejlepší kód je ten, který nemusíte napsat. Zustand vrací do state managementu radost a jednoduchost."</blockquote>
      
      <h2>Hlavní výhody Zustandu:</h2>
      <ul>
        <li><strong>Žádný Provider:</strong> Nepotřebujete obalovat celou aplikaci do Context Provideru.</li>
        <li><strong>Minimalismus:</strong> Vytvoření storu zabere doslova pár řádků kódu.</li>
        <li><strong>Výkon:</strong> Komponenty se překreslují pouze tehdy, když se změní konkrétní hodnota, kterou odebírají.</li>
      </ul>

      <pre><code>import { create } from 'zustand'\n\nconst useStore = create((set) => ({\n  bears: 0,\n  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),\n}))</code></pre>

      <p>Pokud stále bojujete se složitostí Reduxu, dejte Zustandu šanci. Vaše codebase vám poděkuje.</p>
    `
  },
  "5": {
    title: "Kouzlo CSS Container Queries",
    tag: "CSS",
    date: "12. Březen 2026",
    readTime: "5 min čtení",
    author: "Martin Habenicht",
    role: "Frontend Developer",
    content: `
      <p>Dlouhé roky jsme se při tvorbě responzivního designu spoléhali výhradně na Media Queries. Problém ale je, že Media Queries reagují na velikost celého okna prohlížeče (viewportu), nikoliv na velikost samotného kontejneru, ve kterém se komponenta nachází.</p>
      
      <h2>Skutečně modulární komponenty</h2>
      <p>S příchodem Container Queries se pravidla hry mění. Nyní můžeme navrhnout komponentu (např. kartu článku), která sama pozná, kolik má místa, a podle toho upraví svůj layout.</p>
      
      <h2>Jak to funguje v praxi?</h2>
      <p>Nejprve musíme nadřazenému elementu definovat, že se stává kontejnerem. Následně můžeme uvnitř použít pravidlo <code>@container</code>.</p>

      <pre><code>.card-wrapper {\n  container-type: inline-size;\n}\n\n@container (max-width: 400px) {\n  .card {\n    flex-direction: column;\n  }\n}</code></pre>

      <p>Díky tomuto přístupu můžete stejnou komponentu vložit do úzkého sidebaru i do široké hlavní sekce a ona se v obou případech zachová naprosto správně. Je to obrovský krok kupředu pro vývoj design systémů.</p>
    `
  },
  "6": {
    title: "Mikrointerakce: Detail, který prodává",
    tag: "UX",
    date: "1. Březen 2026",
    readTime: "4 min čtení",
    author: "Martin Habenicht",
    role: "UI/UX Designer",
    content: `
      <p>Často se soustředíme na velké funkce a celosvětovou architekturu aplikace, ale uživatelé si zamilují produkt díky malým, nenápadným detailům. Mikrointerakce jsou tím, co odlišuje dobrý produkt od skvělého.</p>
      
      <h2>Co je to mikrointerakce?</h2>
      <p>Jde o drobnou vizuální nebo zvukovou zpětnou vazbu na akci uživatele. Může to být tlačítko, které se po kliknutí jemně promáčkne, kostlivec (skeleton loader), který plynule přejde do načteného obsahu, nebo ikonka srdíčka, která při "lajknutí" praskne jako bublina.</p>
      
      <h2>Proč na nich záleží?</h2>
      <ul>
        <li><strong>Okamžitá zpětná vazba:</strong> Uživatel hned ví, že systém jeho akci zaregistroval.</li>
        <li><strong>Prevence chyb:</strong> Jemné animace mohou uživatele vést správným směrem a zabránit špatnému kliknutí.</li>
        <li><strong>Emoční spojení:</strong> Dělají aplikaci "lidštější" a zábavnější na používání.</li>
      </ul>

      <p>Při implementaci mikrointerakcí ale platí zlaté pravidlo: <strong>Méně je více</strong>. Animace by měly být rychlé (pod 300 ms) a nesmí uživatele zdržovat od jeho hlavního cíle.</p>
    `
  }
};