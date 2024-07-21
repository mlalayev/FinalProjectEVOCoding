import React, { useEffect } from 'react';
import './Instructors.css';
import { useTranslation } from 'react-i18next';
import instructorData from '../../../../InstructorData.json';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Instructors() {

    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            offset: 200,
            delay: '1s',
            duration: 3000,
            easing: 'ease',
            once: false
        });
    }, []);

    return (
        <div
            data-aos="fade-right"
        >
            <h1 style={{
                textAlign:"center"
            }}>{t('instructor.textone')}</h1>
            <p style={{
                margin:"20px auto",
                maxWidth: "400px",
                textAlign: "center",
                color: "gray"
            }}>{t('instructor.texttwo')}</p>
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
                        <div
                            style={{
                                margin: "5px 0 10px 0"
                            }}
                            className="sectionfifth-card-text-holder">
                            <h1>{instructor.name}</h1>
                            <p>{instructor.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Instructors;
