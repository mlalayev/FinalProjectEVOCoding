import React from 'react';
import './Instructors.css';
import instructorone from '../../../assets/instructorone.png';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Instructors() {
    return (
        <div className='sectionfifth-card-holder'>
            <div className="sectionfifth-card">
                <div className="sectionfifth-image-wrapper">
                    <img src={instructorone} alt="" className='sectionfifth-image' />
                    <div className="social-icons">
                        <div className='icon-holder' > <FaInstagram size={30} className='icons' /></div>
                        <div className='icon-holder' > <FaTwitter size={30} className='icons' /></div>
                        <div className='icon-holder' > <FaFacebookF size={30} className='icons' /></div>
                        <div className='icon-holder' > <FaLinkedinIn size={30} className='icons' /></div>
                    </div>
                </div>
            </div>
            <div className="sectionfifth-card-text-holder">
                <h1>Dylan Meringue</h1>
                <p>Sales Director</p>
            </div>
        </div>
    );
}

export default Instructors;
