import React from 'react';
import '../../Common/Root.css';
import './BecomeOneSection.css';
import { FaAngleRight } from "react-icons/fa6";

const BecomeOneSection = () => {
  return (
    <div className="PagesBackground">
    <div className="BackgorundText">
  <div className="UpText">
    <h2>Become A Teacher</h2>
  </div>
  <div className="DownText">
    <a href="/">Home</a>
   <FaAngleRight />
    <span>Become A Teacher</span>
  </div>
  </div>
</div>
  )
}

export default BecomeOneSection;