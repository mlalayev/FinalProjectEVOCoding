import React from 'react'
import './MyProfileTwoSection.css'
import { IoBook } from "react-icons/io5";
import { FaPuzzlePiece } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSettings } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const MyProfileTwoSection = () => {
  return (
    <div className="MyProfileTwoSectionontainer">
       <div className="MyProfileTwoSectionLeftSide">
    <ul>
        <a href="#" className="active"><li><span><IoBook /></span>Courses </li></a>
        <a href="#"><li><span><FaPuzzlePiece /></span>Quizzes </li></a>
        <a href="#"><li><span><RiShoppingCart2Fill /> </span>Orders </li></a>
        <a href="#"><li><span><MdSettings /></span>Settings</li></a>
        <a href="/"><li><span><FaSignOutAlt /></span>Logout</li></a>
    </ul>
</div>
        <div className="MyProfileTwoSectionLeftSide">
                <div className="MyProfileTwoSectionLeftSideTopPart">
                    <div className="StatisticBox">
                        <p>Enrolled Courses</p>
                        <span>0</span>
                    </div>
                    <div className="StatisticBox">
                        <p>Enrolled Courses</p>
                        <span>0</span>
                    </div>
                    <div className="StatisticBox">
                        <p>Enrolled Courses</p>
                        <span>0</span>
                    </div>
                </div>
                <div className="MyProfileTwoSectionLeftSideBottomPart">
                <div className="StatisticBox">
                        <p>Enrolled Courses</p>
                        <span>0</span>
                    </div>
                    <div className="StatisticBox">
                        <p>Enrolled Courses</p>
                        <span>0</span>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default MyProfileTwoSection