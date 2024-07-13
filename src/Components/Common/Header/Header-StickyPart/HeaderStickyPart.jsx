import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import logo from '../../../../assets/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDownSLine } from "react-icons/ri";
import './HeaderStickyPart.css'

function HeaderStickyPart() {
  const { t, i18n } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

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
            {t('header.home')}
            <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'home' ? 'open' : ''}`} />
            {openSubMenu === 'home' && (
              <div className={`submenu-desktop ${openSubMenu === 'home' ? 'open' : ''}`}>
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
              <div className={`submenu-desktop ${openSubMenu === 'all-courses' ? 'open' : ''}`}>
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
              <div className={`submenu-desktop ${openSubMenu === 'blog-classic' ? 'open' : ''}`}>
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
              <div className={`submenu-desktop ${openSubMenu === 'pages' ? 'open' : ''}`}>
                <a href="/aboutus" className='submenu-item'>About Us</a>
                <a href="/events" className='submenu-item'>Events</a>
                <a href="/instructor" className='submenu-item'>Instructor</a>
                <a href="/testimonial" className='submenu-item'>Testimonial</a>
                <a href="/samplepage" className='submenu-item'>Sample Page</a>
                <a href="/pageleftsidebar" className='submenu-item'>Page Left Sidebar</a>
                <a href="/pagerightsidebar" className='submenu-item'>Page Right Sidebar</a>
                <a href="/404page" className='submenu-item'>404 Page</a>
              </div>
            )}
          </div>
          <a href="/contact-us" className='menu-item'>{t('header.contactUs')}</a>
        </div>
      )}

      <a href="/"><img src={logo} alt="logo" className='logo' /></a>

      <ul className='navigation-menu'>
        <li onClick={() => handleSubMenuToggle('home')}>
          <p className='header-menu-p-tag'>{t('header.home')} <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'home' ? 'open' : ''}`} /></p>
          {openSubMenu === 'home' && (
            <ul className={`submenu-desktop ${openSubMenu === 'home' ? 'open' : ''}`}>
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
            <ul className={`submenu-desktop ${openSubMenu === 'blog-classic' ? 'open' : ''}`}>
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
            <ul className={`submenu-desktop ${openSubMenu === 'pages' ? 'open' : ''}`}>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/instructor">Instructor</a></li>
              <li><a href="/testimonial">Testimonial</a></li>
              <li><a href="/samplepage">Sample Page</a></li>
              <li><a href="/pageleftsidebar">Page Left Sidebar</a></li>
              <li><a href="/pagerightsidebar">Page Right Sidebar</a></li>
              <li><a href="/404page">404 Page</a></li>
            </ul>
          )}
        </li>
        <li><a href="/contact-us" className='' >{t('header.contactUs')}</a></li>
      </ul>

      <button className='header-button'>{t('header.joinliveclass')}</button>
    </div>
  )
}

export default HeaderStickyPart