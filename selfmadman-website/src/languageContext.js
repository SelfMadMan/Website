import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    // Detect browser language, slice to get the first part (e.g., 'en-US' becomes 'en')
    const defaultLanguage = navigator.language.slice(0, 2) === 'fr' ? 'FR' : 'EN';
    
    const [language, setLanguage] = useState(defaultLanguage); // Use detected language as default

    useEffect(() => {
        // Optionally, you could store the user's language preference in localStorage and retrieve it here
        const storedLanguage = localStorage.getItem('appLanguage');
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);

    // Optionally save language preference when it changes
    useEffect(() => {
        localStorage.setItem('appLanguage', language);
    }, [language]);

    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
};
