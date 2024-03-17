import React from 'react';
import { useLanguage } from '../languageContext';

const LanguageSelector = () => {
  const { setLanguage } = useLanguage();

  return (
    <select onChange={(e) => setLanguage(e.target.value)}>
      <option value="EN">English</option>
      <option value="FR">French</option>
      {/* Add more languages as needed */}
    </select>
  );
};

export default LanguageSelector;
