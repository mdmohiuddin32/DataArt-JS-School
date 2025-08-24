import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './styles.css';

// Mount React into the existing <section id="timeline">
ReactDOM.createRoot(document.getElementById('timeline') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
