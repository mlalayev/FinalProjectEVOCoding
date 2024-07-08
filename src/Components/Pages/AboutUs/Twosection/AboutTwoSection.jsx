import React from 'react'
import './AboutTwoSection.css'
import AboutTwoSectionImg from '../../../../assets/Pages/AboutUs/AboutTwoSection.png'

const AboutTwoSection = () => {
  return (
    <div className="AboutTwoContainer">
    <div className="AboutTwoSectionLeftSide">
      <h1>About Varsity</h1>
      <p>{t('Pages.AboutTwoContainer')}Varsity is an educational Bootstrap Premium Template</p>
      <p>{t('Pages.AboutTwoContainerr')}You can use it for making your modern educational website.</p>
    </div>
    <div className="AboutTwoSectionRightSide">
    <img src={AboutTwoSectionImg} alt="AboutTwoSectionImg" />
    </div>
    </div>
  )
}

export default AboutTwoSection;