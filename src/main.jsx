import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PortafolioApp } from './PortafolioApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PortafolioApp />
    </BrowserRouter>
  </React.StrictMode>,
)
