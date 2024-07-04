import './Header.css';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from '../../../assets/logo.png';

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <header>
      <ul className="language-menu">
        <li onClick={() => changeLanguage('en')}>English</li>
        <li onClick={() => changeLanguage('az')}>Azərbaycan</li>
        <li onClick={() => changeLanguage('ru')}> Русский</li>
      </ul>
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
        <RxHamburgerMenu size={30} onClick={toggleMenu} />
        {isMenuOpen && (
          <div className="menu">
            <div className='menu-item' onClick={() => toggleSubMenu('home')}>
              {t('header.home')}
              {openSubMenu === 'home' && (
                <div className="submenu">
                  <a href="/buraPathyazin" className='submenu-item'>Homepage Style One</a>
                  <a href="/homepage-style-two" className='submenu-item'>Homepage Style Two</a>
                  <a href="/homepage-style-three" className='submenu-item'>Homepage Style Three</a>
                  <a href="/homepage-style-four" className='submenu-item'>Homepage Style Four</a>
                </div>
              )}
            </div>
            <div className='menu-item' onClick={() => toggleSubMenu('all-courses')}>
              All Courses
              {openSubMenu === 'all-courses' && (
                <div className="submenu">
                  <a href="/all-courses" className='submenu-item'>Course One</a>
                  <a href="/all-courses" className='submenu-item'>Course Two</a>
                  <a href="/all-courses" className='submenu-item'>Course Three</a>
                  <a href="/all-courses" className='submenu-item'>Course Four</a>
                </div>
              )}
            </div>
            <div className='menu-item' onClick={() => toggleSubMenu('blog-classic')}>
              Blog Classic
              {openSubMenu === 'blog-classic' && (
                <div className="submenu">
                  <a href="/blog-classic" className='submenu-item'>Blog One</a>
                  <a href="/blog-classic" className='submenu-item'>Blog Two</a>
                  <a href="/blog-classic" className='submenu-item'>Blog Three</a>
                  <a href="/blog-classic" className='submenu-item'>Blog Four</a>
                </div>
              )}
            </div>
            <div className='menu-item' onClick={() => toggleSubMenu('pages')}>
              Pages
              {openSubMenu === 'pages' && (
                <div className="submenu">
                  <a href="/pages" className='submenu-item'>Page One</a>
                  <a href="/pages" className='submenu-item'>Page Two</a>
                  <a href="/pages" className='submenu-item'>Page Three</a>
                  <a href="/pages" className='submenu-item'>Page Four</a>
                </div>
              )}
            </div>
            <a href="/contact-us" className='menu-item'>Contact Us</a>
          </div>
        )}

        <img src={logo} alt="logo" className='logo' />
        <button className='header-button'>{t('header.joinliveclass')}</button>
      </div>
    </header>
  );
}

export default Header;
