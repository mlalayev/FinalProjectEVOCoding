import './LastSection.css';
import '../../Common/Root.css';
import { useTranslation } from 'react-i18next';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';
import LastSectionData from '../../../../LastSectionData.json';
import AOS from 'aos';
import 'aos/dist/aos.css';


function LastSection({ interval = 8000 }) {
    const { t, i18n } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [language, setLanguage] = useState(i18n.language);
    useEffect(() => {
        AOS.init({
            offset: 200,
            delay: '1s',
            duration: 3000,
            easing: 'ease',
            once: false
        });
    }, []);

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

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + LastSectionData.length) % LastSectionData.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % LastSectionData.length);
    };

    return (
        <div
            data-aos="fade-right"
            style={{
                maxWidth: "1350px",
                margin: "0 auto"
            }}

            className='last-section-holder'>
            <div className="last-section-left">
                <div className="last-section-text-holder">
                    <h1>{t('lastsection.firsttext')}</h1>
                    <h1>{t('lastsection.secondtext')}</h1>
                </div>
                <div className="button-holder-last-section">
                    <button className="prev-button" onClick={handlePrevClick}>
                        <FaArrowLeftLong className='color-icon' size={16} />
                    </button>
                    <button className="next-button" onClick={handleNextClick}>
                        <FaArrowRightLong className='color-icon' size={16} />
                    </button>
                </div>
            </div>
            <div className="quote-holder">
                <p>{LastSectionData[currentIndex].quote[language]}</p>
                <div className="profile-holder-eighthsection">
                    <img src={LastSectionData[currentIndex].profileImage} alt="Profile" className='profile-pic' />
                    <div className="profile-text-holder">
                        <h1 className='last-section-hone'>{LastSectionData[currentIndex].name[language]}</h1>
                        <p>{LastSectionData[currentIndex].title[language]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastSection;
