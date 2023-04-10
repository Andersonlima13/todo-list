import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './paginas/Main'
import './styles/global.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Main />
    
  </React.StrictMode>
);

