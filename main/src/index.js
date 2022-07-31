import React from 'react';
import ReactDOM from 'react-dom/client';
import microApp from '@micro-zoe/micro-app'
import App from './App';

microApp.start()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
