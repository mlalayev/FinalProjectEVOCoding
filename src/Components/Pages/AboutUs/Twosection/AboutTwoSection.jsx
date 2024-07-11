import React from 'react'
import './AboutTwoSection.css'
import AboutTwoSectionImg from '../../../../assets/Pages/AboutUs/AboutTwoSection.png'
import { useTranslation } from 'react-i18next';

const AboutTwoSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="AboutTwoContainer">
    <div className="AboutTwoSectionLeftSide">
      <h1>About Varsity</h1>
      <p>{t('pages.abouttwocontainer')}Varsity is an educational Bootstrap Premium Template</p>
      <p>{t('pages.abouttwocontainerr')}You can use it for making your modern educational website.</p>
    </div>
    <div className="AboutTwoSectionRightSide">
    <img src={AboutTwoSectionImg} alt="AboutTwoSectionImg" />
    </div>
    </div>
  )
}

export default AboutTwoSection;