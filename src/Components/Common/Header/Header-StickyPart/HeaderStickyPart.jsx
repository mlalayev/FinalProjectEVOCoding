import '../../Root.css';
import './HeaderStickyPart.css';
import { useTranslation } from 'react-i18next';
import logo from '../../../../assets/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDownSLine } from "react-icons/ri";
import React, { useState, useEffect, useRef } from 'react';

function HeaderStickyPart() {
  const menuRef = useRef(null);
  const { t, i18n } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  return (
    <div className={`header-lower ${isSticky ? 'sticky' : ''}`} ref={menuRef}>
      <RxHamburgerMenu size={30} onClick={toggleMenu} className='hamburger-icon' />
      {isMenuOpen && (
        <div className="menu">
          <div className='menu-item' onClick={() => handleSubMenuToggle('home')}>
            <span className='menu-span'>
              {t('header.home')}
              <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'home' ? 'open' : ''}`} />
            </span>
            {openSubMenu === 'home' && (
              <div className={`submenu-desktop ${openSubMenu === 'home' ? 'open' : ''}`}>
                <a href="/" className='submenu-item'>Homepage Style One</a>
                <a href="/" className='submenu-item'>Homepage Style Two</a>
                <a href="/" className='submenu-item'>Homepage Style Three</a>
                <a href="/" className='submenu-item'>Homepage Style Four</a>
              </div>
            )}
          </div>
          <div className='menu-item' onClick={() => handleSubMenuToggle('all-courses')}>
            <span className='menu-span' >
              {t('header.allCourses')}
              <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'all-courses' ? 'open' : ''}`} />
            </span>
            {openSubMenu === 'all-courses' && (
              <div className={`submenu-desktop ${openSubMenu === 'all-courses' ? 'open' : ''}`}>
                <a href="/all-courses" className='submenu-item'>Course One</a>
                <a href="/all-courses" className='submenu-item'>Course Two</a>
                <a href="/all-courses" className='submenu-item'>Course Three</a>
                <a href="/all-courses" className='submenu-item'>Course Four</a>
              </div>
            )}
          </div>
          <div className='menu-item' onClick={() => handleSubMenuToggle('blog-classic')}>
            <span className='menu-span' >
              {t('header.blogClassic')}
              <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'blog-classic' ? 'open' : ''}`} />
            </span>
            {openSubMenu === 'blog-classic' && (
              <div className={`submenu-desktop ${openSubMenu === 'blog-classic' ? 'open' : ''}`}>
                <a href="/blog" className='submenu-item'>Blog One</a>
                <a href="/blog" className='submenu-item'>Blog Two</a>
                <a href="/blog" className='submenu-item'>Blog Three</a>
                <a href="/blog" className='submenu-item'>Blog Four</a>
              </div>
            )}
          </div>
          <div className='menu-item' onClick={() => handleSubMenuToggle('pages')}>
            <span className='menu-span' >
              {t('header.pages')}
              <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'pages' ? 'open' : ''}`} />
            </span>
            {openSubMenu === 'pages' && (
              <div className={`submenu-desktop ${openSubMenu === 'pages' ? 'open' : ''}`}>
                <a href="/aboutus" className='submenu-item'>{t('pages.aboutus')}</a>
                <a href="/events" className='submenu-item'>{t('pages.events')}</a>
                <a href="/instructor" className='submenu-item'>{t('pages.instructor')}</a>
                <a href="/aboutus" className='submenu-item'>{t('pages.testimonials')}</a>
                <a href="/instructor" className='submenu-item'>{t('pages.samplepage')}</a>
                <a href="/events" className='submenu-item'>{t('pages.pageleftsidebar')}</a>
                <a href="/events" className='submenu-item'>{t('pages.pagerightsidebar')}</a>
                <a href="/404page" className='submenu-item'>{t('pages.404page')}</a>
              </div>
            )}
          </div>
          <a href="/contactus" className='menu-item'>{t('header.contactUs')}</a>
        </div>
      )}

      <a href="/"><img src={logo} alt="logo" className='logo' /></a>

      <ul className='navigation-menu'>
        <li onClick={() => handleSubMenuToggle('home')}>
          <p className='header-menu-p-tag'>{t('header.home')} <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'home' ? 'open' : ''}`} /></p>
          {openSubMenu === 'home' && (
            <ul className={`submenu-desktop ${openSubMenu === 'home' ? 'open' : ''}`}>
              <li><a href="/">Homepage Style One</a></li>
              <li><a href="/">Homepage Style Two</a></li>
              <li><a href="/">Homepage Style Three</a></li>
              <li><a href="/">Homepage Style Four</a></li>
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
            <ul className={`submenu-desktop ${openSubMenu === 'blog-classic' ? 'open' : ''}`}>
              <li><a href="/blog">Blog One</a></li>
              <li><a href="/blog">Blog Two</a></li>
              <li><a href="/blog">Blog Three</a></li>
              <li><a href="/blog">Blog Four</a></li>
            </ul>
          )}
        </li>
        <li onClick={() => handleSubMenuToggle('pages')}>
          <p className='header-menu-p-tag'> {t('header.pages')} <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'pages' ? 'open' : ''}`} /> </p>
          {openSubMenu === 'pages' && (
            <ul className={`submenu-desktop ${openSubMenu === 'pages' ? 'open' : ''}`}>
              <li><a href="/aboutus">{t('pages.aboutus')}</a></li>
              <li><a href="/events">{t('pages.events')}</a></li>
              <li><a href="/instructor">{t('pages.instructor')}</a></li>
              <li><a href="/aboutus">{t('pages.testimonial')}</a></li>
              <li><a href="/events">{t('pages.samplepage')}</a></li>
              <li><a href="/instructor">{t('pages.pageleftsidebar')}</a></li>
              <li><a href="/aboutus">{t('pages.pagerightsidebar')}</a></li>
              <li><a href="/404page">{t('pages.404page')}</a></li>
            </ul>
          )}
        </li>
        <li><a href="/contactus" className='' >{t('header.contactUs')}</a></li>
      </ul>

      <button className='header-button'><a href="/liveclass">{t('header.joinliveclass')}</a></button>
    </div>
  )
}

export default HeaderStickyPart