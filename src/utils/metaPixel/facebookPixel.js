import ReactPixel from 'react-facebook-pixel';

const initFacebookPixel = pixelId => {
  ReactPixel.init(pixelId, {
    autoConfig: true, // Enable automatic configuration
    debug: false, // Set true for debugging
  });
  ReactPixel.pageView(); // Track initial page load
};

export default initFacebookPixel;
