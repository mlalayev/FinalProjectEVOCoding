import React from "react";
import "./EventsOneSection.css";
import { FaAngleRight } from "react-icons/fa6";

const EventsOneSection = () => {
  return (
    <div className="PagesBackground">
        <div className="BackgorundText">
      <div className="UpText">
        <h2>Events</h2>
      </div>
      <div className="DownText">
        <a href="/">Home</a>
       <FaAngleRight />
        <span>Events</span>
      </div>
      </div>
    </div>
  );
};

export default EventsOneSection;
