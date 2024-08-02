import './Sidebar.css';
import React from 'react';
import '../../Common/Root.css';
import { IoLogOut } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar" data-aos="zoom-out-down">
      <ul>
        <li className="sidebar-item active">
          <FaBookOpen className='left-icon' /><p>Courses</p><FaChevronRight className='icon' />
        </li>
        <li className="sidebar-item">
          <FaPuzzlePiece className='left-icon' /><p>Quizzes</p><FaChevronRight className='icon' />
        </li>
        <li className="sidebar-item">
          <FaShoppingCart className='left-icon' /><p>Orders</p><FaChevronRight className='icon' />
        </li>
        <li className="sidebar-item">
          <IoMdSettings className='left-icon' /><p>Settings</p><FaChevronRight className='icon' />
        </li>
        <li className="sidebar-item">
          <IoLogOut className='left-icon' /><p>Logout</p><FaChevronRight className='icon' />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
