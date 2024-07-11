import React, { useState, useEffect } from 'react';
import { PiBookLight } from "react-icons/pi";
import { IoPerson } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import './Card.css'
import cardsData from '../../../../SectionThreeCardsData.json';
import { IoMdStar } from "react-icons/io";


function Card({ interval = 8000 }) {
    const [imageIndex, setImageIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    useEffect(() => {
        const autoslide = setInterval(() => {
            handleNextImage();
        }, interval);

        return () => clearInterval(autoslide);
    }, [interval]);

    const handleNextImage = () => {
        if (!isSliding) {
            setIsSliding(true);
            setTimeout(() => {
                setImageIndex((index) => (index === cardsData.length - 1 ? 0 : index + 1));
                setIsSliding(false);
            }, 500);
        }
    };

    const handlePrevImage = () => {
        if (!isSliding) {
            setIsSliding(true);
            setTimeout(() => {
                setImageIndex((index) => (index === 0 ? cardsData.length - 1 : index - 1));
                setIsSliding(false);
            }, 500);
        }
    };

    const handleDotClick = (index) => {
        if (!isSliding) {
            setImageIndex(index);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'd') {
                handleNextImage();
            } else if (e.key === 'ArrowLeft' || e.key === 'a') {
                handlePrevImage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isSliding]);

    return (
        <div className="card-holder-section-three">

            {cardsData.map((card, index) => (
                <div
                    key={index}
                    className={`card ${index === imageIndex ? 'active' : ''}`}
                    style={{ display: index === imageIndex ? 'block' : 'none' }}
                >
                    <img src={card.image} alt="course-slider-holder" className='sectionthird-image' />
                    <div className="price-rating-holder">
                        <p className='blue font-light'>{card.text1}</p>
                        <div className="rating-holder">
                            {[...Array(card.rating)].map((_, i) => (
                                <IoMdStar key={i} color='gold' />
                            ))}
                        </div>
                    </div>
                    <div className="profile-holder">
                        <h1>{card.title}</h1>
                        <div className="profile-photo-holder">
                            <img src={card.profileImage} alt="profile-photo" className='profile-photo' />
                            <p>{card.profileText}</p>
                        </div>
                    </div>
                    <div className="lesson-holder">
                        <div className="lesson-holder-left">
                            <PiBookLight color='var(--main-blue-color)' />
                            <p>{card.lessonCount}</p>
                        </div>
                        <div className="lesson-holder-right">
                            <IoPerson color='var(--main-blue-color)' />
                            <p>{card.lessonPerson}</p>
                        </div>
                    </div>
                </div>
            ))}

            <div className="dots">
                {cardsData.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === imageIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Card;
