import React from 'react';
import './Testimonial.css'
import PagesHeaderProps from '../AboutUs/Onesection/PagesHeaderProps';
import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const { t, i18n } = useTranslation();
  return (
    <PagesHeaderProps title = {t('pages.testimonial')}/>
  )
}

export default Testimonial;