import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Automatically redirect www to clean canonical domain for elite SEO configuration
if (typeof window !== "undefined" && window.location.hostname.startsWith("www.")) {
  window.location.replace(window.location.href.replace("www.", ""));
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
