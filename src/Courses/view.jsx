import React, { useState } from "react";
import '../Courses/view.css';
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { HiBookmark } from "react-icons/hi2";
import { TbClockHour4Filled } from "react-icons/tb";
import { FaSignal } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import photo from '../assets/Cards/card1.jpg'
import photo2 from '../assets/Cards/card5.jpg'
import Info from "./info_left";




const View = () => {
    return (
        <div className="view">
            <div className="course_home">
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <p style={{ color: '#ACACAC', cursor: 'pointer' }}>Home </p>
                </Link>
                <p style={{ marginTop: '7px' }}>{<MdNavigateNext />}</p>

                <p style={{ color: '#ACACAC', cursor: 'pointer' }}>All courses</p>

                <p style={{ marginTop: '7px' }}>{<MdNavigateNext />}</p>

                <p style={{ color: '#ACACAC', cursor: 'pointer' }}>Computer Science</p>

                <p style={{ marginTop: '7px' }}>{<MdNavigateNext />}</p>
                <p>Software Development</p>
            </div>

            <div className="view_card">
                <div id="card">
                    <div className="card_up">
                        <div className="up_left">
                            <div className="up_photo">
                                <img src={photo} alt="" />
                            </div>
                            <div className="up_info">
                                <p>Instructure</p>
                                <h3>Adam Smith</h3>
                            </div>
                        </div>
                        <div className="up_left">
                            <div className="up_photo">
                                <HiBookmark
                                style={{fontSize:'50px', color:'#007bff'}}
                                 />
                            </div>
                            <div className="up_info">
                                <p>Catogery</p>
                                <h3>Computer Science</h3>
                            </div>
                        </div>
                    </div>
                    <div className="card_middle">
                        <h1>Software Development</h1>
                    </div>
                    <div className="card_down">
                        <div className="down_icon">
                            <span>{<TbClockHour4Filled />}</span>
                            <p>10 Weeks</p>
                        </div>

                        <div className="down_icon">
                            <span>{<FaSignal />}</span>
                            <p>All Levels</p>
                        </div>

                        <div className="down_icon">
                            <span>{<MdCollectionsBookmark />}</span>
                            <p>Lessons</p>
                        </div>

                        <div className="down_icon">
                            <span>{<FaPuzzlePiece />}</span>
                            <p>Quiz</p>
                        </div>

                        <div className="down_icon">
                            <span>{<PiStudentBold />}</span>
                            <p>0 Students</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="view_information">

               <div className="info_left">
     
                         
                <Info
                  name='Requaments'
                  text='Quem consolando docuit recurrant labefactare sapientium stoicorum gloriosum facile mutandi'
                  textTwo='Prudenter geometria probo corpore de urbe optimis nullus videbimus copulationesque plebem leges adhibebat risu'
                  textTree='Scisse suave omnibus suffragio apertis seditione memoriae reprehendit adiit humanis nisi breve genera tua sepulcrum'
                  textFour=' Certum oportebit obscurari facit natae interrete prope ostentatio medicinam contineo perge peripatetici'
                  textFive='Fiant poterat comparandis eiuro disserendo omnes splendida officium pendere animantibus nostro incontentae primis acute cupiditate'
                  textSix='Dixerunt polemoni quidam quot democriteum summo ambiguo fidibus vero dissentit interesse magos'
                />
                <Info
                  name='Features'
                  text='Quem consolando docuit recurrant labefactare sapientium stoicorum gloriosum facile mutandi'
                  textTwo='Prudenter geometria probo corpore de urbe optimis nullus videbimus copulationesque plebem leges adhibebat risu'
                  textTree='Scisse suave omnibus suffragio apertis seditione memoriae reprehendit adiit humanis nisi breve genera tua sepulcrum'
                  textFour=' Certum oportebit obscurari facit natae interrete prope ostentatio medicinam contineo perge peripatetici'
                  textFive='Fiant poterat comparandis eiuro disserendo omnes splendida officium pendere animantibus nostro incontentae primis acute cupiditate'
                  textSix='Dixerunt polemoni quidam quot democriteum summo ambiguo fidibus vero dissentit interesse magos'
                />

                <Info
                  name='Target audiences'
                  text='Quem consolando docuit recurrant labefactare sapientium stoicorum gloriosum facile mutandi'
                  textTwo='Prudenter geometria probo corpore de urbe optimis nullus videbimus copulationesque plebem leges adhibebat risu'
                  textTree='Scisse suave omnibus suffragio apertis seditione memoriae reprehendit adiit humanis nisi breve genera tua sepulcrum'
                  textFour=' Certum oportebit obscurari facit natae interrete prope ostentatio medicinam contineo perge peripatetici'
                  textFive='Fiant poterat comparandis eiuro disserendo omnes splendida officium pendere animantibus nostro incontentae primis acute cupiditate'
                  textSix='Dixerunt polemoni quidam quot democriteum summo ambiguo fidibus vero dissentit interesse magos'
                />

                <div className='info_left_down'>
                     <div className="left_up">
                        <div className="up_select">
                            <h2>Overview</h2>
                        </div>
                        <div className="up_select">
                            <h2>Curriculum</h2>
                        </div>
                        <div className="up_select">
                            <h2>Instructor</h2>
                        </div>
                        <div className="up_select">
                            <h2 >FAQs</h2>
                        </div>
                     </div>

                     <div className="left_down">
                         <p>Fusi absolutam contra licentiam contenti verba tu solebat callido anteponebas positum amicos moriare praestantia disputare philosophi affectus turpe sapientis plebem</p>
                         <p>Gestiret expetenda hoc ennius conveniat defecerit subito</p>
                    </div>
                   
                </div>
    
               </div>

                <div className="info_right">
                    <div className="info_photo">
                        <img src={photo2} alt="info_photo" />
                    </div>
                    <div className="info_price">
                        <h1>$ 120</h1>
                    </div>
                    <div className="info_btn">
                        <Link to={'/view/buyNow'} style={{width:'80%'}}><button>Buy Now</button></Link>
                    </div>
                    <div className="info_up">
                        <h2>Featured Review</h2>
                    </div>
                    <div className="info_icons">
                        <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                    </div>
                    <div className="info_text">
                        <p>Aperiendum doctorum agimus perspexerit isti verborumne duas illi cupiditatum 
                        democritus haberent luci facillimum inventoribus eriperes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default View;