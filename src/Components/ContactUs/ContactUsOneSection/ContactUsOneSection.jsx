import React from 'react'
import './ContactUsOneSection.css'
import { FaAngleRight } from "react-icons/fa6";

const ContactUsOneSection = () => {
  return (
    <div className="PagesBackground">
        <div className="BackgorundText">
      <div className="UpText">
        <h2>Contact Us</h2>
      </div>
      <div className="DownText">
        <a href="/">Home</a>
       <FaAngleRight />
        <span>Contact Us</span>
      </div>
      </div>
    </div>
  )
}

export default ContactUsOneSection;