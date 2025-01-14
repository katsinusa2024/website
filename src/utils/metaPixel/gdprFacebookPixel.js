import { useState, useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

const useGDPRFacebookPixel = pixelId => {
  const [consentGranted, setConsentGranted] = useState(false);

  useEffect(() => {
    // Initialize the Pixel with consent revoked
    ReactPixel.init(pixelId, {}, { autoConfig: true, debug: false });
    ReactPixel.revokeConsent(); // Start with consent revoked
  }, [pixelId]);

  const grantConsent = () => {
    ReactPixel.grantConsent(); // Grant consent when the user agrees
    setConsentGranted(true);
  };

  return { consentGranted, grantConsent };
};

export default useGDPRFacebookPixel;
