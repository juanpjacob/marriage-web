import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Confirmation from './components/Confirmation';
import Information from './components/Information';
import Gifts from './components/Gifts';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Information />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/gifts" element={<Gifts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      (registration) => {
        console.log('Service worker registered in', registration.scope);
      },
      (err) => {
        console.log('Error registering service worker:', err.message);
      }
    );
  });
}
