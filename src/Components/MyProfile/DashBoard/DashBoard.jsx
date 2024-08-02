import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './DashBoard.css';
import '../../Common/Root.css';

function DashBoard() {
    useEffect(() => {
        Aos.init({
          offset: 120,
          duration: 2000,
          easing: "ease",
          once: true,
        });
      }, []);
    return (
        <div className="dashboard" data-aos="zoom-in-right">
            <div className="dahboard-card">
                <p>Enrolled Courses</p>
                <h3>0</h3>
            </div>
            <div className="dahboard-card">
                <p>Active Courses</p>
                <h3>0</h3>
            </div>
            <div className="dahboard-card">
                <p>Completed Courses</p>
                <h3>0</h3>
            </div>
            <div className="dahboard-card">
                <p>Total Courses</p>
                <h3>5</h3>
            </div>
            <div className="dahboard-card">
                <p>Total Students</p>
                <h3>0</h3>
            </div>
        </div>
    )
}

export default DashBoard;
