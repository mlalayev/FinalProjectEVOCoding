import React from "react";
import "./EventsOneSection.css";
import { FaAngleRight } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const EventsOneSection = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="PagesBackground">
        <div className="BackgorundText">
      <div className="UpText">
        <h2>{t('pages.events')}</h2>
      </div>
      <div className="DownText">
        <a href="/">{t('header.home')}</a>
       <FaAngleRight />
        <span>{t('pages.events')}</span>
      </div>
      </div>
    </div>
  );
};

export default EventsOneSection;
