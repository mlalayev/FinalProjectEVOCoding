import './Card.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoMdStar } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { PiBookLight } from "react-icons/pi";
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import cardsData from '../../../../SectionThreeCardsData.json';


const CardSlider = ({ interval = 8000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const { t, i18n } = useTranslation();



  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsPerView(3);
      } else if (width >= 800) {
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
      return newIndex >= cardsData[i18n.language].length ? 0 : newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - cardsPerView;
      return newIndex < 0 ? cardsData[i18n.language].length - cardsPerView : newIndex;
    });
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index * cardsPerView);
  };

  return (
    <div
      data-aos="fade-right"
      className='card-holder-section'>
      <div className="card-slider">

        <h1>{t('card.texthone')}</h1>
        <h1>{t('card.texthtwo')}</h1>
        <p
          style={{
            maxWidth: "400px",
            textAlign: "center",
            color: "gray",
            margin:"20px 0"
          }}
          className='text-gray margin-btm text-center'>{t('card.textpone')}</p>

        <div className="card-container" >
          {cardsData[i18n.language].map((card, index) => {
            const isActive = Math.floor(index / cardsPerView) === Math.floor(currentIndex / cardsPerView);
            return (
              <div
                key={index}
                className={`card ${isActive ? 'active' : ''}`}
              >
                <div className="card-holder">
                  <img src={card.image} alt="course-slider-holder" className="sectionthird-image" />
                  <div className="card-text-holder">
                    <div className="price-rating-holder">
                      <p className="price-holder">{card.text1}</p>
                      <div className="rating-holder">
                        <p className="a">{card.text2}</p>
                        <div className="star-holder">
                          {[...Array(card.rating)].map((_, i) => (
                            <IoMdStar key={i} color="gold" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="profile-holder">
                      <h1 className='card-title'>{card.title}</h1>
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="dots-card">
        {Array(Math.ceil(cardsData[i18n.language].length / cardsPerView)).fill().map((_, index) => (
          <span
            key={index}
            className={`dot-card ${index === Math.floor(currentIndex / cardsPerView) ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;