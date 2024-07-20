import React, { useEffect } from "react";
import "./AboutFourSection.css";
import CardAvatarOneImg from "../../../../assets/Pages/AboutUs/avatar1.png";
import CardAvatarTwoImg from "../../../../assets/Pages/AboutUs/avatar2.png";
import CardAvatarThreeImg from "../../../../assets/Pages/AboutUs/avatar3.png";
import CardAvatarFourImg from "../../../../assets/Pages/AboutUs/avatar4.png";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutFourSection = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 2000,
      easing: "ease",
      once: false,
    });
  }, []);
  return (
    <>
      <div className="AboutFourSectionContainer">
        <div
          className="AboutFourSectionText"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h2>Our Team</h2>
          <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</i>
        </div>
        <div className="AboutFourCardSection">
          <div
            className="AboutFourSectionCardItem"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="RoundDiv">
              <img src={CardAvatarOneImg} alt="RoundDivImg" />
            </div>
            <h5>Manuella Nevoresky</h5>
            <p>CEO - FOUNDER</p>
          </div>
          <div
            className="AboutFourSectionCardItem"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="RoundDiv">
              <img src={CardAvatarTwoImg} alt="RoundDivImg" />
            </div>
            <h5>Samuel Hardy</h5>
            <p>MANAGING DIRECTOR</p>
          </div>
          <div
            className="AboutFourSectionCardItem"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="RoundDiv">
              <img src={CardAvatarThreeImg} alt="RoundDivImg" />
            </div>
            <h5>Tom Sunderland</h5>
            <p>SUPERVISOR</p>
          </div>
          <div
            className="AboutFourSectionCardItem"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="RoundDiv">
              <img src={CardAvatarFourImg} alt="RoundDivImg" />
            </div>
            <h5>John Tarly</h5>
            <p>TEAM LEADER</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFourSection;
