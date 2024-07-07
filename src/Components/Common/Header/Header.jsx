import './Header.css';
import React, { useState, useEffect, useRef } from 'react';
import { FaPhone } from "react-icons/fa6";
import logo from '../../../assets/logo.png';
import { FaRegEnvelope } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDownSLine } from "react-icons/ri";
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown.jsx';

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleSubMenuToggle = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenSubMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <LanguageDropdown changeLanguage={changeLanguage} className='salam' />

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

      <div className="header-lower" ref={menuRef}>
        <RxHamburgerMenu size={30} onClick={toggleMenu} className='hamburger-icon' />
        {isMenuOpen && (
          <div className="menu">
            <div className='menu-item' onClick={() => handleSubMenuToggle('home')}>
              {t('header.home')}
              <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'home' ? 'open' : ''}`} />
              {openSubMenu === 'home' && (
                <div className="submenu">
                  <a href="/salam" className='submenu-item'>Homepage Style One</a>
                  <a href="/homepage-style-two" className='submenu-item'>Homepage Style Two</a>
                  <a href="/homepage-style-three" className='submenu-item'>Homepage Style Three</a>
                  <a href="/homepage-style-four" className='submenu-item'>Homepage Style Four</a>
                </div>
              )}
            </div>
            <div className='menu-item' onClick={() => handleSubMenuToggle('all-courses')}>
              {t('header.allCourses')}
              <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'all-courses' ? 'open' : ''}`} />
              {openSubMenu === 'all-courses' && (
                <div className="submenu">
                  <a href="/all-courses" className='submenu-item'>Course One</a>
                  <a href="/all-courses" className='submenu-item'>Course Two</a>
                  <a href="/all-courses" className='submenu-item'>Course Three</a>
                  <a href="/all-courses" className='submenu-item'>Course Four</a>
                </div>
              )}
            </div>
            <div className='menu-item' onClick={() => handleSubMenuToggle('blog-classic')}>
              {t('header.blogClassic')}
              <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'blog-classic' ? 'open' : ''}`} />
              {openSubMenu === 'blog-classic' && (
                <div className="submenu">
                  <a href="/blog-classic" className='submenu-item'>Blog One</a>
                  <a href="/blog-classic" className='submenu-item'>Blog Two</a>
                  <a href="/blog-classic" className='submenu-item'>Blog Three</a>
                  <a href="/blog-classic" className='submenu-item'>Blog Four</a>
                </div>
              )}
            </div>
            <div className='menu-item' onClick={() => handleSubMenuToggle('pages')}>
              {t('header.pages')}
              <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'pages' ? 'open' : ''}`} />
              {openSubMenu === 'pages' && (
                <div className="submenu">
                  <a href="/pages" className='submenu-item'>Page One</a>
                  <a href="/pages" className='submenu-item'>Page Two</a>
                  <a href="/pages" className='submenu-item'>Page Three</a>
                  <a href="/pages" className='submenu-item'>Page Four</a>
                </div>
              )}
            </div>
            <a href="/contact-us" className='menu-item'>{t('header.contactUs')}</a>
          </div>
        )}

        <img src={logo} alt="logo" className='logo' />

        <ul className='navigation-menu'>
          <li onClick={() => handleSubMenuToggle('home')}>
            <p className='header-menu-p-tag'>{t('header.home')} <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'home' ? 'open' : ''}`} /></p>
            {openSubMenu === 'home' && (
              <ul className='submenu-desktop'>
                <li><a href="/salam">Homepage Style One</a></li>
                <li><a href="/homepage-style-two">Homepage Style Two</a></li>
                <li><a href="/homepage-style-three">Homepage Style Three</a></li>
                <li><a href="/homepage-style-four">Homepage Style Four</a></li>
              </ul>
            )}
          </li>
          <li onClick={() => handleSubMenuToggle('all-courses')}>
            <p className='header-menu-p-tag'> {t('header.allCourses')} <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'all-courses' ? 'open' : ''}`} /></p>
            {openSubMenu === 'all-courses' && (
              <ul className='submenu-desktop'>
                <li><a href="/all-courses">Course One</a></li>
                <li><a href="/all-courses">Course Two</a></li>
                <li><a href="/all-courses">Course Three</a></li>
                <li><a href="/all-courses">Course Four</a></li>
              </ul>
            )}
          </li>
          <li onClick={() => handleSubMenuToggle('blog-classic')}>
            <p className='header-menu-p-tag'>{t('header.blogClassic')} <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'blog-classic' ? 'open' : ''}`} /></p>
            {openSubMenu === 'blog-classic' && (
              <ul className='submenu-desktop'>
                <li><a href="/blog-classic">Blog One</a></li>
                <li><a href="/blog-classic">Blog Two</a></li>
                <li><a href="/blog-classic">Blog Three</a></li>
                <li><a href="/blog-classic">Blog Four</a></li>
              </ul>
            )}
          </li>
          <li onClick={() => handleSubMenuToggle('pages')}>
            <p className='header-menu-p-tag'> {t('header.pages')} <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'pages' ? 'open' : ''}`} /> </p>
            {openSubMenu === 'pages' && (
              <ul className='submenu-desktop'>
                <li><a href="/pages">Page One</a></li>
                <li><a href="/pages">Page Two</a></li>
                <li><a href="/pages">Page Three</a></li>
                <li><a href="/pages">Page Four</a></li>
              </ul>
            )}
          </li>
          <li><a href="/contact-us" className='' >{t('header.contactUs')}</a></li>
        </ul>

        <button className='header-button'>{t('header.joinliveclass')}</button>
      </div>
    </header>
  );
}

export default Header;
