import React from "react";
import "./InstructorOneSection.css";
import { FaAngleRight } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';


const InstructorOneSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="PagesBackground">
    <div className="BackgorundText">
  <div className="UpText">
    <h2>{t('pages.instructor')}</h2>
  </div>
  <div className="DownText">
    <a href="/">{t('header.home')}</a>
   <FaAngleRight />
    <span>{t('pages.instructor')}</span>
  </div>
  </div>
</div>
  );
};

export default InstructorOneSection;