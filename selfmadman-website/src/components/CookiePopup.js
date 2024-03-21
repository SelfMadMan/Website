import React, { useState, useEffect } from 'react';
import './CookiePopup.css'; // Assurez-vous d'importer le fichier CSS correctement
import { useLanguage } from '../languageContext'; // Adjust the import path as necessary
import { db } from '../firebaseconfig'; // Adjust the import path as necessary
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';



const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { language } = useLanguage(); // Use the current language

  useEffect(() => {
    const consentGiven = sessionStorage.getItem('cookieConsent');
    if (consentGiven) {
      setIsVisible(false); // Hide popup if consent is already given
    }
  }, []);


  const handleButtonClick = async (consent) => {
    setIsVisible(false);
    sessionStorage.setItem('cookieConsent', consent); // Store the user's decision in sessionStorage

    try {
      // Specify the collection where you want to save the consent
      const docRef = await addDoc(collection(db, "cookieConsents"), {
        consent, // "Accept" or "Refuse"
        timestamp: serverTimestamp() // Sets the server timestamp
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  if (!isVisible) return null;
  const heroTranslations = {
    EN: {
      text: "We use cookies to improve your experience. By continuing, you accept our cookie policy.",
      Refuse:"Refuse",
      Accept: "Accept",
    },
    // Add to src/translations/heroTranslations.js
    FR: {
      text: "Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre politique de cookies.",
      Refuse:"Refuser",
      Accept: "Accepter",
    },
  };
  const { text, Refuse, Accept  } = heroTranslations[language]; // Get translations

  return (
    <div className="cookie-popup">
      <p>{text}</p>
        <div className='cookie-btn'>
        <button onClick={() => handleButtonClick('Refuse')} className='refuse-btn'>{Refuse}</button>
         <button onClick={() => handleButtonClick('Accept')} className='allow-btn'>{Accept}</button>

        </div>
    </div>
  );
};

export default CookiePopup;
