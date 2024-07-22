import React, { useEffect } from 'react';
import './AboutTwoSection.css'
import AboutTwoSectionImg from '../../../../assets/Pages/AboutUs/AboutTwoSection.png'
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css'


const AboutTwoSection = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    Aos.init({
        offset: 100,
        duration: 2000,
        easing: 'ease',
        once: true
    });
}, []);
  return (
    <div className="AboutTwoContainer">
    <div className="AboutTwoSectionLeftSide" data-aos="fade-up" data-aos-delay="400">
      <h1>{t('aboutus.oneheader')}</h1>
      <p>{t('aboutus.onetext')}</p>
      <p>{t('aboutus.onetextt')}</p>
    </div>
    <div className="AboutTwoSectionRightSide" data-aos="fade-up" data-aos-delay="200">
    <img src={AboutTwoSectionImg} alt="AboutTwoSectionImg" data-aos="fade-up" data-aos-delay="200"/>
    </div>
    </div>
  )
}

export default AboutTwoSection;