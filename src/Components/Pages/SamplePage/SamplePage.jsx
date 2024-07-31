import React from 'react';
import './SamplePage.css'
import PagesHeaderProps from '../AboutUs/Onesection/PagesHeaderProps';
import { useTranslation } from "react-i18next";

const SamplePage = () => {
  const { t, i18n } = useTranslation();
  return (
    <PagesHeaderProps title = {t('pages.samplepage')}/>
  )
}

export default SamplePage;