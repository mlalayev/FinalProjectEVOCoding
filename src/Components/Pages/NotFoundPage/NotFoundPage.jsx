import React from "react";
import "./NotFoundPage.css";
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="NotFoundBodys">
      <h1>404</h1>
      <p>{t('notfoundpage.notfoundinfo')}</p>
      <a className="button" href="/">
        <i className="icon-home" /> {t('notfoundpage.notfoundbackhome')}
      </a>
    </div>
  );
};

export default NotFoundPage;
