import Aos from 'aos';
import 'aos/dist/aos.css';
import "./AboutThreeSection.css";
import '../../../Common/Root.css';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AboutThreeSectionUpRightImgTwo from '../../../../assets/Pages/AboutUs/three.png';
import AboutThreeSectionUpRightImg from '../../../../assets/Pages/AboutUs/AboutThreeSectionUp.png';


const AboutThreeSection = () => {
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
    <div className="AboutThreeSectionContainer">
      <div className="AboutThreeSectionUp">
        <div className="AboutThreeSectionUpLeft" data-aos="fade-up" data-aos-delay="500">
          <h2>{t('aboutus.twoheader')}</h2>
          <p>
          {t('aboutus.twotext')}
          </p>
          <button><a href="/all-courses">{t('aboutus.twobutton')}</a></button>
        </div>
        <div className="AboutThreeSectionUpRight" data-aos="fade-up" data-aos-delay="200">
            <img src={AboutThreeSectionUpRightImg} alt="" />
        </div>
      </div>
      <div className="AboutThreeSectionUp">
        <div className="AboutThreeSectionUpLeft" data-aos="fade-up" data-aos-delay="500">
          <h2>{t('aboutus.threeheader')}</h2>
          <p>
          {t('aboutus.threetext')}
          </p>
          <button><a href="/all-courses">{t('aboutus.threebutton')}</a></button>
        </div>
        <div className="AboutThreeSectionUpRight" data-aos="fade-up" data-aos-delay="200">
            <img src={AboutThreeSectionUpRightImgTwo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutThreeSection;
