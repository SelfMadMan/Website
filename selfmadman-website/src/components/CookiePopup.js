import React, { useState } from 'react';
import './CookiePopup.css'; // Assurez-vous d'importer le fichier CSS correctement

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    // Vous pourriez également mettre en place une logique pour enregistrer le consentement de l'utilisateur ici.
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-popup">
      <p>Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre politique de cookies.</p>
        <div className='cookie-btn'>
        <button onClick={handleClose} className='cta-btn disabled'>Refuser</button>
         <button onClick={handleClose} className='cta-btn'>Accepter</button>

        </div>
    </div>
  );
};

export default CookiePopup;
