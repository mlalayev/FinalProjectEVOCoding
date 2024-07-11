import React from "react";
import "./AboutOneSection.css";
import { FaAngleRight } from "react-icons/fa6";

const AboutOneSection = () => {


  return (
    <div className="PagesBackground">
        <div className="BackgorundText">
      <div className="UpText">
        <h2>About Us</h2>
      </div>
      <div className="DownText">
        <a href="/">Home</a>
       <FaAngleRight />
        <span>About Us</span>
      </div>
      </div>
    </div>
  );
};

export default AboutOneSection;
