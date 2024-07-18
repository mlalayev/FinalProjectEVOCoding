import '../Root.css';
import './Header.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown.jsx';
import HeaderStickyPart from './Header-StickyPart/HeaderStickyPart.jsx';
import NonStickyHeader from './Header-NonStickyPart/NotStickyHeader.jsx';

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
