import './MyProfile.css';
import React from 'react';
import '../Common/Root.css';
import Sidebar from './Sidebar/Sidebar.jsx';
import Dashboard from './DashBoard/DashBoard.jsx';

const MyProfile = () => {
  return (
    <div className="app-myprofile">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default MyProfile;
