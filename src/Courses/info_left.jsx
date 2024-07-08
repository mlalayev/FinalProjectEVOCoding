import React, { useState } from "react";
import '../Courses/view.css';
import { GoCheck } from "react-icons/go";
import { LiaChevronUpSolid } from "react-icons/lia";
import { LiaChevronDownSolid } from "react-icons/lia";

const Info =({name,text, textTwo,textTree,textFour,textFive,textSix})=>{
    const [down,setDown]=useState('requaments_downTwo');
    const [icon,setIcon] =useState(true)
    const clickHandler=()=>{
        down === ('requaments_downTwo') ? setDown('requaments_down') : setDown('requaments_downTwo');
        setIcon(!icon);
    }
return(
   
    <div className="requaments">
        <div onClick={clickHandler} className="requaments_up">
            <h1 style={{fontSize:'20px'}}>{name}</h1>
             {icon ? < LiaChevronDownSolid/> : < LiaChevronUpSolid/>  }
        </div>
        
        <div className={down}>
            <div className="requaments_text">
              <p><GoCheck style={{color:'#007bff' }}/> {text} </p>
            </div>

            <hr />
            <div className="requaments_text">
              <p> <GoCheck style={{color:'#007bff' }}/>{textTwo} </p>
            </div>

            <hr />
            <div className="requaments_text">
                <p> <GoCheck style={{color:'#007bff' }}/>{textTree} </p>
            </div>

            <hr />
            <div className="requaments_text">
                <p><GoCheck style={{color:'#007bff' }}/>{textFour} </p>
            </div>

            <hr />
            <div className="requaments_text">
                <p><GoCheck style={{color:'#007bff' }}/>{textFive}</p>
            </div>

            <hr />
            <div className="requaments_text">
                <p><GoCheck style={{color:'#007bff' }}/>{textSix} </p>
            </div>
        </div>
    </div>

)
}
export default Info;