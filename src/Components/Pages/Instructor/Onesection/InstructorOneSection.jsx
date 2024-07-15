import React from "react";
import "./InstructorOneSection.css";
import { FaAngleRight } from "react-icons/fa6";


const InstructorOneSection = () => {
  return (
    <div className="PagesBackground">
    <div className="BackgorundText">
  <div className="UpText">
    <h2>Instructor</h2>
  </div>
  <div className="DownText">
    <a href="/">Home</a>
   <FaAngleRight />
    <span>Instructor</span>
  </div>
  </div>
</div>
  );
};

export default InstructorOneSection;
