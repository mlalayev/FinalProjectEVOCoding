import React from "react";
import "./AboutThreeSection.css";
import AboutThreeSectionUpRightImg from '../../../../assets/Pages/AboutUs/AboutThreeSectionUp.png'
import AboutThreeSectionUpRightImgTwo from '../../../../assets/Pages/AboutUs/three.png'


const AboutThreeSection = () => {
  return (
    <div className="AboutThreeSectionContainer">
      <div className="AboutThreeSectionUp">
        <div className="AboutThreeSectionUpLeft">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button><a href="/all-courses">Our Courses</a></button>
        </div>
        <div className="AboutThreeSectionUpRight">
            <img src={AboutThreeSectionUpRightImg} alt="" />
        </div>
      </div>
      <div className="AboutThreeSectionUp">
        <div className="AboutThreeSectionUpLeft">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button><a href="/all-courses">All events</a></button>
        </div>
        <div className="AboutThreeSectionUpRight">
            <img src={AboutThreeSectionUpRightImgTwo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutThreeSection;
