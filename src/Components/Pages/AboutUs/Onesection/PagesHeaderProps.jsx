import React from "react";
import "./AboutOneSection.css";
import { FaAngleRight } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const PagesHeaderProps = ({ title}) => {
  const { t } = useTranslation();
  return (
    <div className="PagesBackground">
      <div className="BackgorundText">
        <div className="UpText">
          <h2>{title}</h2>
        </div>
        <div className="DownText">
          <a href="/">{t('header.home')}</a>
          <FaAngleRight />
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default PagesHeaderProps;
