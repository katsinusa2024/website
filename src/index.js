import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';

// Initialize Facebook Pixel
const pixelId = '1393362078221567';
ReactPixel.init(pixelId);
ReactPixel.pageView(); // Track initial page view

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
