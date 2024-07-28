import React from 'react';
import './PageLeftSideBar.css'
import PagesHeaderProps from '../AboutUs/Onesection/PagesHeaderProps';
import { useTranslation } from "react-i18next";

const PageLeftSideBar = () => {
  const { t, i18n } = useTranslation();
  return (
    <PagesHeaderProps title = {t('pages.pageleftsidebar')}/>
  )
}

export default PageLeftSideBar;