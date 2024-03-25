import React, { useEffect } from 'react';

const GoogleTagManager = () => {
  useEffect(() => {
    // Adding the gtag.js script
    const scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-YLWN2HKFNR';
    document.head.appendChild(scriptTag);

    // Initializing the dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-YLWN2HKFNR');
  }, []);

  return null; // Render nothing, script is added in the head
}

export default GoogleTagManager;
