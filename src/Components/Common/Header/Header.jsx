import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  const langMenuRef = useRef(null);
  const langButtonRef = useRef(null);


  useEffect(() => {
    const body = document.body;
    const selectedLanguage = i18n.language; // Get the selected language from i18n
    if (selectedLanguage === 'ru') {
      body.style.fontFamily = "Arial-RU";
    }

    // Add event listener to handle clicks outside language menu
    function handleClickOutside(event) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target) && langButtonRef.current && !langButtonRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  return (
    <ul className="language-menu">
      {/* <li onClick={() => changeLanguage('en')}>English</li> */}
      {/* <li onClick={() => changeLanguage('az')}>Azərbaycan</li> */}
      {/* <li onClick={() => changeLanguage('ru')}> Русский</li> */}
    </ul>

  );
}

export default Header;