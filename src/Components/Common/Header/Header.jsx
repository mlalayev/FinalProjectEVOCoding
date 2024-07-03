import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  return (
    <ul className="language-menu">
      <li onClick={() => changeLanguage('en')}>English</li>
      <li onClick={() => changeLanguage('az')}>Azərbaycan</li>
      <li onClick={() => changeLanguage('ru')}> Русский</li>
    </ul>

  );
}

export default Header;