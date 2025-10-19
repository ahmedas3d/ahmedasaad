import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import './styles/rtl.css';
import './i18n/config';
import App from './App';
import { LanguageProvider } from './contexts/LanguageContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);