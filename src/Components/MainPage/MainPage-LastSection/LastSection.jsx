import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LastSection.css';
import LastSectionData from '../../../../LastSectionData.json';

function LastSection({ interval = 8000 }) {
    const { t, i18n } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [language, setLanguage] = useState(i18n.language);

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % LastSectionData.length);
        }, interval);

        return () => clearInterval(autoSlide);
    }, [interval]);

    useEffect(() => {
        setLanguage(i18n.language);
    }, [i18n.language]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='last-section-holder'>
            <h1>{t('lastsection.firsttext')}</h1>
            <h1>{t('lastsection.secondtext')}</h1>
            <div className="quote-holder">
                <p>{LastSectionData[currentIndex].quote[language]}</p>
                <div className="profile-holder-eighthsection">
                    <img src={LastSectionData[currentIndex].profileImage} alt="Profile" className='profile-pic' />
                    <div className="profile-text-holder">
                        <h1>{LastSectionData[currentIndex].name[language]}</h1>
                        <p>{LastSectionData[currentIndex].title[language]}</p>
                    </div>
                </div>
            </div>
            <div className="dots-last-section">
                {LastSectionData.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default LastSection;
