import React from 'react';
import './PageRightSideBar.css'
import PagesHeaderProps from '../AboutUs/Onesection/PagesHeaderProps';
import { useTranslation } from "react-i18next";

const PageRightSideBar = () => {
  const { t, i18n } = useTranslation();
  return (
   <PagesHeaderProps title = {t('pages.pagerightsidebar')}/>
  )
}

export default PageRightSideBar;