// Dashboard.js
import React from 'react';
import './DashBoard.css';

function DashBoard() {
    return (
        <div className="dashboard">
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
