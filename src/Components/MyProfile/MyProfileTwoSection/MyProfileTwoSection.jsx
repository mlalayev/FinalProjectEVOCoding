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
        <li><a href=""><span><IoBook /></span>Courses</a></li>
        <li><a href=""><span><FaPuzzlePiece /></span>Quizzes </a></li>
        <li><a href=""><span><RiShoppingCart2Fill /> </span>Orders </a></li>
        <li><a href=""><span><MdSettings /></span>Settings </a></li>
        <li><a href="/"><span><FaSignOutAlt /></span>Logout </a></li>
    </ul>
</div>
        <div className="MyProfileTwoSectionRightSide">
                <div className="MyProfileTwoSectionRightSideTopPart">
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
                <div className="MyProfileTwoSectionRightSideBottomPart">
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