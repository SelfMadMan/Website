import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Adjust the import path according to your project structure
import { LanguageProvider } from '../src/languageContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider> {/* Wrap App with LanguageProvider */}
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
