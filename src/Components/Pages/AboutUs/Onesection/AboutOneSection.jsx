import React from "react";
import "./AboutOneSection.css";
import '../../../Common/Root.css';
import { FaAngleRight } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const AboutOneSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="PagesBackground">
        <div className="BackgorundText">
      <div className="UpText">
        <h2>{t('pages.aboutus')}</h2>
      </div>
      <div className="DownText">
        <a href="/">{t('header.home')}</a>
       <FaAngleRight />
        <span>{t('pages.aboutus')}</span>
      </div>
      </div>
    </div>
  );
};

export default AboutOneSection;
