import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Entry point da aplicação — sem importação de SCSS
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
