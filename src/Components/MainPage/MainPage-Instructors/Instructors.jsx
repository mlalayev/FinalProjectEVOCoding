import React from 'react';
import './Instructors.css';
import instructorData from '../../../../InstructorData.json';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Instructors() {
    return (
        <div className='sectionfifth-card-holder'>
            {instructorData.map((instructor) => (
                <div className="sectionfifth-card" key={instructor.id}>
                    <div className="sectionfifth-image-wrapper">
                        <img src={instructor.image} alt={instructor.name} className='sectionfifth-image' />
                        <div className="social-icons">
                            <div className='icon-holder'><FaInstagram size={25} className='icons' /></div>
                            <div className='icon-holder'><FaTwitter size={25} className='icons' /></div>
                            <div className='icon-holder'><FaFacebookF size={25} className='icons' /></div>
                            <div className='icon-holder'><FaLinkedinIn size={25} className='icons' /></div>
                        </div>
                    </div>
                    <div className="sectionfifth-card-text-holder">
                        <h1>{instructor.name}</h1>
                        <p>{instructor.role}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Instructors;
