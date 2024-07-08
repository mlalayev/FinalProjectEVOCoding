import React from "react";
import '../Courses/course.css'
// icons...
import { MdNavigateNext } from "react-icons/md";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
// icons...
import Course_cards from "./course_cards";
// img...
import Card1 from '../../src/assets/Cards/card1.jpg';
import Card2 from '../../src/assets/Cards/card2.jpg';
import Card3 from '../../src/assets/Cards/card3.jpg';
import Card4 from '../../src/assets/Cards/card4.jpg';
import Card5 from '../../src/assets/Cards/card5.jpg';
import Card6 from '../../src/assets/Cards/card6.jpg';
import Card7 from '../../src/assets/Cards/card7.jpg';
import Card8 from '../../src/assets/Cards/card8.jpg';
import View from "./view";
// img...
const Course =()=>{
return(
    <main className="course">
        <div className="home-course">
         <Link to={'/'} style={{textDecoration:'none'}}><p style={{color:'#ACACAC',cursor:'pointer'} }>Home </p> </Link>
         <p style={{marginTop:'7px'}}>{<MdNavigateNext />}</p>
         <p>All courses</p>
        </div>
         
         <div className="search">
            <h1>All Courses</h1>
            <div className="search-right">
                <div className="inputSearch">
                  <input type="text" name="text" id="text" placeholder="Seach courses..." style={{paddingLeft:'20px'}} />
                  <p>{<IoSearchSharp />}</p>
                </div>
                <p className="icon">{<TfiLayoutGrid3Alt />}</p>
                <p className="icon">{<TfiMenuAlt />}</p>
            </div>
         </div>
         
         <Course_cards 
          price='$160.00'
          course_name ='Software Development'
          skill='Computer Science'
          name='Adam Smith'
          img={Card1}
        />
        
        <Course_cards 
          price='$140.00'
          course_name ='Business'
          skill='Business Essentials'
          name='Jarek Majiek'
          img={Card2}
        />

       <Course_cards 
          price='$110.00'
          course_name ='Arts & Humanities'
          skill='History & Philosophy'
          name='Adam Smith'
          img={Card3}
        />

        <Course_cards 
          price='$130.00'
          course_name ='Language Learning'
          skill='English learning'
          name='Tomash Jarek'
          img={Card4}
        />
         
         <Course_cards 
          price='$190.00'
          course_name ='Business'
          skill='Business Strategy'
          name='Adam Smith'
          img={Card5}
        />

        <Course_cards 
          price='$100.00'
          course_name ='Arts & Humanities'
          skill='Music & Art'
          name='Adam Smith'
          img={Card6}
        />
        
        <Course_cards 
          price='$135.00'
          course_name ='Data Science'
          skill='Data Analysis'
          name='Adam Smith'
          img={Card7}
        />

        <Course_cards 
          price='$200.00'
          course_name ='Math & Logic'
          skill='Algebra & Calculus'
          name='Adam Smith'
          img={Card8}
        />

        <div className="course_pages">
            <button style={{backgroundColor:'#007bff', color:'#FFFF'}}>1</button>
            <button>2</button>
            <button style={{marginBottom:'20px'}}><GrLinkNext/></button>
        </div>

       
    </main>
)
}

export default Course;