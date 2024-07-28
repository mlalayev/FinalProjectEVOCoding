// MyProfile.js
import React from 'react';
import Sidebar from './Sidebar/Sidebar.jsx';
import Dashboard from './DashBoard/DashBoard.jsx';
import './MyProfile.css'
import PagesHeaderProps from '../Pages/AboutUs/Onesection/PagesHeaderProps.jsx';
import { useTranslation } from "react-i18next";

const MyProfile = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
    <PagesHeaderProps title = {t('header.myprofile')} />
    <div className="app-myprofile">
      <Sidebar />
      <Dashboard />
    </div>
    </>
  );
};

export default MyProfile;
