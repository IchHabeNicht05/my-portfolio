import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// JetBrains Mono (pouze latin + váhy 400 a 700)
import '@fontsource/jetbrains-mono/latin-400.css';
import '@fontsource/jetbrains-mono/latin-700.css';

// Geist (pouze latin + váhy 400 a 700)
import '@fontsource/geist/latin-400.css';
import '@fontsource/geist/latin-700.css';

import './index.css'
import SmoothScroll from './components/ui/SmoothScroll.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScroll>
        <App />
      </SmoothScroll>
    </BrowserRouter>
  </StrictMode>,
)