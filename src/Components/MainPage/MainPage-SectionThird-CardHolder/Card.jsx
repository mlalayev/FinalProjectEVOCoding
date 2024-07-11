import React, { useState, useEffect } from 'react';
import { PiBookLight } from "react-icons/pi";
import { IoPerson } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import cardsData from '../../../../SectionThreeCardsData.json';
import './Card.css';

const CardSlider = ({ interval = 8000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsPerView(3);
      } else if (width >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);

    return () => {
      window.removeEventListener('resize', updateCardsPerView);
    };
  }, []);

  useEffect(() => {
    const autoslide = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(autoslide);
  }, [interval]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + cardsPerView;
      return newIndex >= cardsData.length ? 0 : newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - cardsPerView;
      return newIndex < 0 ? cardsData.length - cardsPerView : newIndex;
    });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index * cardsPerView);
  };

  return (
    <div className="card-slider">
      <div className="card-container" >
        {cardsData.map((card, index) => {
          const isActive = Math.floor(index / cardsPerView) === Math.floor(currentIndex / cardsPerView);
          return (
            <div
              key={index}
              className={`card ${isActive ? 'active' : ''}`}
            >
              <img src={card.image} alt="course-slider-holder" className="sectionthird-image" />
              <div className="price-rating-holder">
                <p className="blue font-light">{card.text1}</p>
                <div className="rating-holder">
                  {[...Array(card.rating)].map((_, i) => (
                    <IoMdStar key={i} color="gold" />
                  ))}
                </div>
              </div>
              <div className="profile-holder">
                <h1>{card.title}</h1>
                <div className="profile-photo-holder">
                  <img src={card.profileImage} alt="profile-photo" className="profile-photo" />
                  <p>{card.profileText}</p>
                </div>
              </div>
              <div className="lesson-holder">
                <div className="lesson-holder-left">
                  <PiBookLight color="var(--main-blue-color)" />
                  <p>{card.lessonCount}</p>
                </div>
                <div className="lesson-holder-right">
                  <IoPerson color="var(--main-blue-color)" />
                  <p>{card.lessonPerson}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="dots">
        {Array(Math.ceil(cardsData.length / cardsPerView)).fill().map((_, index) => (
          <span
            key={index}
            className={`dot ${index === Math.floor(currentIndex / cardsPerView) ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
