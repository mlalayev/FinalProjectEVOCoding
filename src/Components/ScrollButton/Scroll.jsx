import React, { useState, useEffect } from 'react';
import './Scroll.css'; 
import { IoIosArrowUp } from "react-icons/io";

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
        <i><IoIosArrowUp /></i>
      </button>
    </div>
  );
};

export default ScrollButton;
