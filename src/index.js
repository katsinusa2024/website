import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import initFacebookPixel from './utils/metaPixel/facebookPixel';

const PIXEL_ID = '1393362078221567'; // Replace with your Pixel ID
initFacebookPixel(PIXEL_ID);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
