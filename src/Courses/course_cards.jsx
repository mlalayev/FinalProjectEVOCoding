import React from "react"
import '../Courses/course.css'
import { TbClockHour4Filled } from "react-icons/tb";
import { FaSignal } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Course_cards = ({ price, course_name, name, skill, img }) => {
    return (
        <div className="cards">

            <div className="photo">
                <img src={img} alt="" />
            </div>

            <div className="information">
                <div className="card_up">
                    <div className="button_up">
                        <span>{skill}</span>
                    </div>
                    <a href="#" style={{ color: '#72ACFF' }}>/ {name}</a>
                </div>

                <div className="card_info">
                    <h2>{course_name}</h2>
                </div>

                <div className="card_icons">
                    <div className="icon">
                        <span>{<TbClockHour4Filled />}</span>
                        <p>10 Weeks</p>
                    </div>

                    <div className="icon">
                        <span>{<FaSignal />}</span>
                        <p>All Levels</p>
                    </div>

                    <div className="icon">
                        <span>{<MdCollectionsBookmark />}</span>
                        <p>Lessons</p>
                    </div>

                    <div className="icon">
                        <span>{<FaPuzzlePiece />}</span>
                        <p>Quiz</p>
                    </div>

                    <div className="icon">
                        <span>{<PiStudentBold />}</span>
                        <p>0 Students</p>
                    </div>
                </div>
                <div className="card_text">
                    <p>Fusi absolutam contra licentiam contenti verba tu solebat callido
                        anteponebas positum amicos moriare praestantia disputare…</p>
                </div>
                
                <div className="card_price">
                    <p>{price}</p>
                    <Link to={'/view'}><button>View More</button></Link>
                </div>
            </div>

        </div>
    )
}
export default Course_cards