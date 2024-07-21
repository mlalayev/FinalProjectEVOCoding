import React, { useEffect } from 'react';
import "./AboutThreeSection.css";
import AboutThreeSectionUpRightImg from '../../../../assets/Pages/AboutUs/AboutThreeSectionUp.png'
import AboutThreeSectionUpRightImgTwo from '../../../../assets/Pages/AboutUs/three.png'
import Aos from 'aos';
import 'aos/dist/aos.css'


const AboutThreeSection = () => {
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
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button><a href="/all-courses">Our Courses</a></button>
        </div>
        <div className="AboutThreeSectionUpRight" data-aos="fade-up" data-aos-delay="200">
            <img src={AboutThreeSectionUpRightImg} alt="" />
        </div>
      </div>
      <div className="AboutThreeSectionUp">
        <div className="AboutThreeSectionUpLeft" data-aos="fade-up" data-aos-delay="500">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button><a href="/all-courses">All events</a></button>
        </div>
        <div className="AboutThreeSectionUpRight" data-aos="fade-up" data-aos-delay="200">
            <img src={AboutThreeSectionUpRightImgTwo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutThreeSection;
