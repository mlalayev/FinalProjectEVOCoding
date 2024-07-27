import './Scroll.css'; 
import React, { useState, useEffect } from 'react';
import { HiOutlineArrowCircleUp } from "react-icons/hi";
import { TbCircleChevronsUp } from "react-icons/tb";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 100; 
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); 
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'show' : 'hide'}`}>
      <button className="scroll-button" onClick={scrollToTop}>
        <i className='scroll-button-i'><TbCircleChevronsUp size={45} /></i>
      </button>
    </div>
  );
};

export default ScrollButton;
