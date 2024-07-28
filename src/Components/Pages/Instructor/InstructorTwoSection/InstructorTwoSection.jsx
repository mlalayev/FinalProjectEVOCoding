
import React, { useEffect } from "react";
import './InstructorTwoSection.css'
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';
import instructorsData from './instructors.json';
import PagesHeaderProps from "../../AboutUs/Onesection/PagesHeaderProps";

const InstructorTwoSection = () => {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    Aos.init({
      offset: 220,
      delay: 0,
      duration: 2000,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <>
    <PagesHeaderProps title = {t('pages.instructor')}/>
    <div className="InstructorTwoSectionContainer">
      <div className="InstructorTwoSectionTextPart" data-aos="fade-up" data-aos-anchor-placement="center-center">
        <h2>{t('instructor.textone')}</h2>
        <p>{t('instructor.texttwo')}</p>
      </div>
      <div className="InstructorTwoSectionCardsPart">
        {instructorsData.map((instructor) => (
          <div className="InstructorTwoSectionCard" key={instructor.id} data-aos="fade-up" data-aos-anchor-placement="center-center">
            <div className="InstructorTwoSectionCardUpPart">
              <img src={instructor.imgSrc} alt={`Instructor_${instructor.name}`} />
              <div className="InstructorTwoSectionCardSocials">
                <div className="InstructorSocials"><a href={instructor.socials.instagram} target="_blank"><FaInstagram /></a></div> 
                <div className="InstructorSocials"><a href={instructor.socials.linkedin} target="_blank"><AiOutlineLinkedin /></a></div> 
                <div className="InstructorSocials"><a href={instructor.socials.twitter} target="_blank"><FaTwitter /></a></div> 
                <div className="InstructorSocials"><a href={instructor.socials.facebook} target="_blank"><FaFacebookF /></a></div> 
              </div>
            </div>
            <div className="InstructorTwoSectionCardDownPart">
              <h4>{instructor.name}</h4>
              <p>{instructor.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default InstructorTwoSection;
