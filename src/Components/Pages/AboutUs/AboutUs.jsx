import React from 'react';
import './AboutUs.css'
import AboutOneSection from '../AboutUs/Onesection/AboutOneSection.jsx';
import AboutTwoSection from '../AboutUs/Twosection/AboutTwoSection.jsx';
import AboutThreeSection from './ThreeSection/AboutThreeSection.jsx';
import AboutFourSection from './FourSection/AboutFourSection.jsx';


const AboutUs = () => {
  return (
    <div className="aboutusdiv">
   <AboutOneSection/>
   <AboutTwoSection/>
   <AboutThreeSection/>
   <AboutFourSection/>
   </div>
  )
}

export default AboutUs;