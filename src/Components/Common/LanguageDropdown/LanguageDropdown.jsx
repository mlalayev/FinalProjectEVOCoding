import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageDropdown.css';
import ruFlag from '../../../assets/ru.svg';
import gbFlag from '../../../assets/gb.svg';
import azFlag from '../../../assets/az.svg';

const LanguageDropdown = ({ changeLanguage }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'en');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    changeLanguage(language);
    setIsOpen(false);
  };

  const getFlagSrc = (language) => {
    switch (language) {
      case 'en':
        return gbFlag;
      case 'az':
        return azFlag;
      case 'ru':
        return ruFlag;
      default:
        return gbFlag;
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <div className="language-dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="dropdown-toggle">
        <img src={getFlagSrc(selectedLanguage)} alt="SelectedFlag" className="flag" /> 
      </button>
      {isOpen && (
        <ul className="language-menu">
          {selectedLanguage !== 'en' && (
            <li onClick={() => handleLanguageChange('en')}>
              <img src={gbFlag} alt="GBFlag" className="flag" /> 
            </li>
          )}
          {selectedLanguage !== 'az' && (
            <li onClick={() => handleLanguageChange('az')}>
              <img src={azFlag} alt="AZFlag" className="flag" /> 
            </li>
          )}
          {selectedLanguage !== 'ru' && (
            <li onClick={() => handleLanguageChange('ru')}>
              <img src={ruFlag} alt="RUFlag" className="flag" /> 
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
