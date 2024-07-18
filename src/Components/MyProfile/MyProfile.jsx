// MyProfile.js
import React from 'react';
import Sidebar from './Sidebar/Sidebar.jsx';
import Dashboard from './DashBoard/DashBoard.jsx';
import './MyProfile.css'

const MyProfile = () => {
  return (
    <div className="app-myprofile">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default MyProfile;
