import './Header.css';
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown.jsx';
import { Link } from 'react-router-dom';
import NonStickyHeader from './Header-NonStickyPart/NotStickyHeader.jsx';
import HeaderStickyPart from './Header-StickyPart/HeaderStickyPart.jsx';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <LanguageDropdown changeLanguage={changeLanguage} className='salam' />

      <NonStickyHeader />

      <HeaderStickyPart />
    </header>
  );
}

export default Header;
