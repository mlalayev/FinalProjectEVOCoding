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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isProgressBarVisible, setIsProgressBarVisible] = useState(false);

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
    window.addEventListener('scroll', updateScrollProgress);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
    if (window.scrollY > 0) {
      setIsProgressBarVisible(true);
    } else {
      setIsProgressBarVisible(false);
    }
  };

  const updateScrollProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = (scrollTop / totalHeight) * 100;
    setScrollProgress(progress);
  };

  return (
    <>
      {/* Progress Bar */}
      <div className={`progress-bar-container ${isProgressBarVisible ? 'visible' : ''}`}>
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      <div className={`header-lower ${isSticky ? 'sticky' : ''}`} ref={menuRef}>
        <b><RxHamburgerMenu size={30} onClick={toggleMenu} className='hamburger-icon' /></b>
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
              <span className='menu-span'>
                {t('header.allCourses')}
                <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'all-courses' ? 'open' : ''}`} />
              </span>
              {openSubMenu === 'all-courses' && (
                <div className={`submenu-desktop ${openSubMenu === 'all-courses' ? 'open' : ''}`}>
                  <a href="/all-courses" className='submenu-item'>Course List</a>
                  <a href="/all-courses" className='submenu-item'>Course Grid</a>
                  <a href="/all-courses" className='submenu-item'>Course Slider</a>
                  <a href="/all-courses" className='submenu-item'>Course Details</a>
                  <a href="/all-courses" className='submenu-item'>Course Category</a>
                </div>
              )}
            </div>
            <div className='menu-item' onClick={() => handleSubMenuToggle('blog-classic')}>
              <span className='menu-span'>
                {t('header.blogClassic')}
                <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'blog-classic' ? 'open' : ''}`} />
              </span>
              {openSubMenu === 'blog-classic' && (
                <div className={`submenu-desktop ${openSubMenu === 'blog-classic' ? 'open' : ''}`}>
                  <a href="/blog" className='submenu-item'>Blog Grid</a>
                  <a href="/blog" className='submenu-item'>Blog Slider</a>
                  <a href="/blog" className='submenu-item'>Blog Left Sidebar</a>
                  <a href="/blog" className='submenu-item'>Blog Right Sidebar</a>
                </div>
              )}
            </div>
            <div className='menu-item' onClick={() => handleSubMenuToggle('pages')}>
              <span className='menu-span'>
                {t('header.pages')}
                <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'pages' ? 'open' : ''}`} />
              </span>
              {openSubMenu === 'pages' && (
                <div className={`submenu-desktop ${openSubMenu === 'pages' ? 'open' : ''}`}>
                  <a href="/aboutus" className='submenu-item'>{t('pages.aboutus')}</a>
                  <a href="/events" className='submenu-item'>{t('pages.events')}</a>
                  <a href="/instructor" className='submenu-item'>{t('pages.instructor')}</a>
                  <a href="/aboutus" className='submenu-item'>{t('pages.testimonial')}</a>
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
            <p className='header-menu-p-tag'>{t('header.allCourses')} <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'all-courses' ? 'open' : ''}`} /></p>
            {openSubMenu === 'all-courses' && (
              <ul className='submenu-desktop'>
                <li><a href="/all-courses">Course List</a></li>
                <li><a href="/all-courses">Course Grid</a></li>
                <li><a href="/all-courses">Course Slider</a></li>
                <li><a href="/all-courses">Course Details</a></li>
                <li><a href="/all-courses">Course Category</a></li>
              </ul>
            )}
          </li>
          <li onClick={() => handleSubMenuToggle('blog-classic')}>
            <p className='header-menu-p-tag'>{t('header.blogClassic')} <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'blog-classic' ? 'open' : ''}`} /></p>
            {openSubMenu === 'blog-classic' && (
              <ul className={`submenu-desktop ${openSubMenu === 'blog-classic' ? 'open' : ''}`}>
                <li><a href="/blog">Blog Grid</a></li>
                <li><a href="/blog">Blog Slider</a></li>
                <li><a href="/blog">Blog Left Sidebar</a></li>
                <li><a href="/blog">Blog Right Sidebar</a></li>
              </ul>
            )}
          </li>
          <li onClick={() => handleSubMenuToggle('pages')}>
            <p className='header-menu-p-tag'>{t('header.pages')} <RiArrowDownSLine className={`arrow-down ${openSubMenu === 'pages' ? 'open' : ''}`} /></p>
            {openSubMenu === 'pages' && (
              <ul className={`submenu-desktop ${openSubMenu === 'pages' ? 'open' : ''}`}>
                <li><a href="/aboutus">{t('pages.aboutus')}</a></li>
                <li><a href="/events">{t('pages.events')}</a></li>
                <li><a href="/instructor">{t('pages.instructor')}</a></li>
                <li><a href="/testimonial">{t('pages.testimonial')}</a></li>
                <li><a href="/samplepage">{t('pages.samplepage')}</a></li>
                <li><a href="/pageleftsidebar">{t('pages.pageleftsidebar')}</a></li>
                <li><a href="/pagerightsidebar">{t('pages.pagerightsidebar')}</a></li>
                <li><a href="/404page">{t('pages.404page')}</a></li>
              </ul>
            )}
          </li>
          <li><a href="/contactus">{t('header.contactUs')}</a></li>
        </ul>
        <button className='header-button'><a href="/liveclass">{t('header.joinliveclass')}</a></button>
      </div>
    </>
  );
}

export default HeaderStickyPart;
