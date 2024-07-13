import React, { useState } from "react";
import '../Courses/course.css'
// icons...
import { MdNavigateNext } from "react-icons/md";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
// icons...
import { TbClockHour4Filled } from "react-icons/tb";
import { FaSignal } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";

import {data} from '../Courses/json'

const Course = () => {
  const [search,setSearch]=useState('')
  
  return (
    <main className="course">
      <div className="home-course">
        <Link to={'/'} style={{ textDecoration: 'none' }}><p style={{ color: '#ACACAC', cursor: 'pointer' }}>Home </p> </Link>
        <p style={{ marginTop: '7px' }}>{<MdNavigateNext />}</p>
        <p>All courses</p>
      </div>

      <div className="search">
        <h1>All Courses</h1>
        <div className="search-right">
          <div className="inputSearch">
            <input type="text" name="text" id="text" placeholder="Seach courses..." style={{ paddingLeft: '20px' }} 
             onChange={(e)=>setSearch(e.target.value)}
            />
            <p>{<IoSearchSharp />}</p>
          </div>
          <p className="icon">{<TfiLayoutGrid3Alt />}</p>
          <p className="icon">{<TfiMenuAlt />}</p>
        </div>
      </div>
      
 {data.filter((item)=>{
          return search.toLocaleLowerCase() === '' ? item : item.skill.toLowerCase().includes(search) 
        }).map((item) => (
      <div className="cards" key={item.id}>

        <div className="photo">
          <img src={item.image} alt="" />
        </div>

        <div className="information">
          <div className="card_up">
            <div className="button_up">
              <span>{item.skill}</span>
            </div>
            <a href="#" style={{ color: '#72ACFF' }}>{item.name}</a>
          </div>

          <div className="card_info">
            <h2>{item.course_name}</h2>
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
            <p>{item.price}</p>
            <Link to={'/view'}><button>View More</button></Link>
          </div>
        </div>

      </div>
))} 
      <div className="course_pages">
        <button style={{ backgroundColor: '#007bff', color: '#FFFF' }}>1</button>
        <button>2</button>
        <button style={{ marginBottom: '20px' }}><GrLinkNext /></button>
      </div>


    </main>
  )
}

export default Course;