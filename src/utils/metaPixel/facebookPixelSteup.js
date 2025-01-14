import { useEffect } from 'react';

const FacebookPixelSetup = () => {
  useEffect(() => {
    // Remove existing script if present
    const existingScript = document.getElementById('web-pixels-manager-setup');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append the new script
    const script = document.createElement('script');
    script.id = 'web-pixels-manager-setup';
    script.type = 'application/json'; // Ensures it's treated as JSON data
    script.innerHTML = JSON.stringify({
      pixel_id: '1393362078221567', // Replace with your actual Pixel ID
      pixel_type: 'facebook_pixel',
      eventPayloadVersion: 'v1',
      runtimeContext: 'OPEN',
    });
    document.body.appendChild(script);
  }, []);

  return null; // No visible rendering
};

export default FacebookPixelSetup;
