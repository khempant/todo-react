import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// render function will create a tree of components that
  // is used in reconcillation process.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
