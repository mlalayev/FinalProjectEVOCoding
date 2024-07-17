import React from 'react'
import './MyProfileOneSection.css'
import { FaAngleRight } from "react-icons/fa6";

const MyProfileOneSection = () => {
  return (
    <div className="PagesBackground">
    <div className="BackgorundText">
  <div className="UpText">
    <h2>My Profile</h2>
  </div>
  <div className="DownText">
    <a href="/">Home</a>
   <FaAngleRight />
    <span>My Profile</span>
  </div>
  </div>
</div>
  )
}

export default MyProfileOneSection;