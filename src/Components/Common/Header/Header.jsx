import './Header.css';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect, useRef } from 'react';
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../../assets/logo.png'



function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  return (

    <header>
      {/* <ul className="language-menu">
        <li onClick={() => changeLanguage('en')}>English</li>
        <li onClick={() => changeLanguage('az')}>Azərbaycan</li>
        <li onClick={() => changeLanguage('ru')}> Русский</li>
      </ul> */}
      <div className="header-upper">
        <div className="header-upper-up">
          <a href="" className='header-a-tag margin-bottom'><FaPhone color='#2772FF' /> +464 145 684 325</a>
          <a href="" className='header-a-tag'><FaRegEnvelope color='#2772FF' /> admin@example.com</a>
        </div>
        <div className="header-upper-down">
          <a href="" className='header-a-tag margin-top'>{t('header.becomeateacher')}</a>
          <a href="" className='header-a-tag margin-top'>{t('header.myprofile')}</a>
        </div>
      </div>

      <div className="header-lower">
        <RxHamburgerMenu size={30} />
        <img src={logo} alt="logo" className='logo' />
        <button className='header-button'>Join Live Class</button>
      </div>
    </header>

  );
}

export default Header;