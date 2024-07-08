import React from 'react';
import './Blog.css';
import box1img from '../../assets/box1.png';
import icon1 from '../../assets/icon1.jpg';
import { BsFillPersonFill } from "react-icons/bs";


function Blog (){
    return(
     <section className="Blog">
        <div className="toppart">
        <div className="leftone">
            <div className="box1img">
                <img src={box1img} alt="box1img"/>
            </div>
            <div className="pelements">
            <BsFillPersonFill size={20}/>
                <p>Jim Sechen</p>
                <img src={icon1} alt="iconsaat" />
                <p>October 14,  2023</p>
            </div>
            <div className="textone">
                <div className="boldtext">
                    <h1>Top 10 WordPress Themes for Local Businesses</h1>
                </div>
                <div className="ptext">
                    <p>Twit cuppa Oxford car boot baking cakes I dropped a clanger cheeky bugger young delinquent say, hunky-dory ruddy butty matie boy cheeky cup of char ummm I'm telling get stuffed mate owt to do with me blow.</p>
                </div>
                <div className="readmoretext">
                    <p>Read More</p>
                </div>
            </div>



        </div>
        </div>
     </section>
    )
        
}

export default Blog;