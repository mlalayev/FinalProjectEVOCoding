import React, { useEffect } from "react";
import './InstructorTwoSection.css'
import InstructorTwoSectionOneImg from "../../../../assets/Pages/Instructor/avatar1.png";
import InstructorTwoSectionTwoImg from "../../../../assets/Pages/Instructor/avatar2.png";
import InstructorTwoSectionThreeImg from "../../../../assets/Pages/Instructor/avatar3.png";
import InstructorTwoSectionFourImg from "../../../../assets/Pages/Instructor/avatar4.png";
import InstructorTwoSectionFiveImg from "../../../../assets/Pages/Instructor/avatar5.png";
import InstructorTwoSectionSixImg from "../../../../assets/Pages/Instructor/avatar6.png";
import InstructorTwoSectionSevenImg from "../../../../assets/Pages/Instructor/avatar7.png";
import InstructorTwoSectionEightImg from "../../../../assets/Pages/Instructor/avatar8.png";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";


const InstructorTwoSection = () => {
  useEffect(() => {
    Aos.init({
      offset: 60,
      delay: 0,
      duration: 2000,
      easing: "ease",
      once: true,
    });
  }, []);
  return (
    <div className="InstructorTwoSectionContainer">
      <div className="InstructorTwoSectionTextPart" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
        <h2>Top Instructor</h2>
        <p>
          Jeffrey crikey victoria sponge mush spiffing super arse over tit matie
          boy smashing. The little rotter off his nut codswallop.!
        </p>
      </div>
      <div className="InstructorTwoSectionCardsPart">
        <div className="InstructorTwoSectionCard" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
          <div className="InstructorTwoSectionCardUpPart">
            <img src={InstructorTwoSectionOneImg} alt="Instructor_TwoSection_OneImg" />
            <div className="InstructorTwoSectionCardSocials">
              <div className="InstructorSocials"><a href=""><FaInstagram /></a></div> 
              <div className="InstructorSocials"><a href=""><AiOutlineLinkedin /></a></div> 
              <div className="InstructorSocials"><a href=""><FaTwitter /></a></div> 
              <div className="InstructorSocials"><a href=""><FaFacebookF /></a></div> 
              </div>
          </div>
            <div className="InstructorTwoSectionCardDownPart">
              <h4>Dylan Meringue</h4>
              <p>Sales Director</p>
            </div>
              
        </div>
        <div className="InstructorTwoSectionCard" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
          <div className="InstructorTwoSectionCardUpPart">
            <img src={InstructorTwoSectionTwoImg} alt="Instructor_TwoSection_OneImg" />
            <div className="InstructorTwoSectionCardSocials">
              <div className="InstructorSocials"><a href=""><FaInstagram /></a></div> 
              <div className="InstructorSocials"><a href=""><AiOutlineLinkedin /></a></div> 
              <div className="InstructorSocials"><a href=""><FaTwitter /></a></div> 
              <div className="InstructorSocials"><a href=""><FaFacebookF /></a></div> 
              </div>
          </div>
            <div className="InstructorTwoSectionCardDownPart">
              <h4>Dylan Meringue</h4>
              <p>Sales Director</p>
            </div>
        </div>
        <div className="InstructorTwoSectionCard" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
          <div className="InstructorTwoSectionCardUpPart">
            <img src={InstructorTwoSectionThreeImg} alt="Instructor_TwoSection_OneImg" />
            <div className="InstructorTwoSectionCardSocials">
              <div className="InstructorSocials"><a href=""><FaInstagram /></a></div> 
              <div className="InstructorSocials"><a href=""><AiOutlineLinkedin /></a></div> 
              <div className="InstructorSocials"><a href=""><FaTwitter /></a></div> 
              <div className="InstructorSocials"><a href=""><FaFacebookF /></a></div> 
              </div>
          </div>
            <div className="InstructorTwoSectionCardDownPart">
              <h4>Dylan Meringue</h4>
              <p>Sales Director</p>
            </div>
        </div>
        <div className="InstructorTwoSectionCard" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
          <div className="InstructorTwoSectionCardUpPart">
            <img src={InstructorTwoSectionFourImg} alt="Instructor_TwoSection_OneImg" />
            <div className="InstructorTwoSectionCardSocials">
              <div className="InstructorSocials"><a href=""><FaInstagram /></a></div> 
              <div className="InstructorSocials"><a href=""><AiOutlineLinkedin /></a></div> 
              <div className="InstructorSocials"><a href=""><FaTwitter /></a></div> 
              <div className="InstructorSocials"><a href=""><FaFacebookF /></a></div> 
              </div>
          </div>
            <div className="InstructorTwoSectionCardDownPart">
              <h4>Dylan Meringue</h4>
              <p>Sales Director</p>
            </div>
        </div>
        <div className="InstructorTwoSectionCard" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
          <div className="InstructorTwoSectionCardUpPart">
            <img src={InstructorTwoSectionFiveImg} alt="Instructor_TwoSection_OneImg" />
            <div className="InstructorTwoSectionCardSocials">
              <div className="InstructorSocials"><a href=""><FaInstagram /></a></div> 
              <div className="InstructorSocials"><a href=""><AiOutlineLinkedin /></a></div> 
              <div className="InstructorSocials"><a href=""><FaTwitter /></a></div> 
              <div className="InstructorSocials"><a href=""><FaFacebookF /></a></div> 
              </div>
          </div>
            <div className="InstructorTwoSectionCardDownPart">
              <h4>Dylan Meringue</h4>
              <p>Sales Director</p>
            </div>
        </div>
        <div className="InstructorTwoSectionCard" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
          <div className="InstructorTwoSectionCardUpPart">
            <img src={InstructorTwoSectionSixImg} alt="Instructor_TwoSection_OneImg" />
            <div className="InstructorTwoSectionCardSocials">
              <div className="InstructorSocials"><a href=""><FaInstagram /></a></div> 
              <div className="InstructorSocials"><a href=""><AiOutlineLinkedin /></a></div> 
              <div className="InstructorSocials"><a href=""><FaTwitter /></a></div> 
              <div className="InstructorSocials"><a href=""><FaFacebookF /></a></div> 
              </div>
          </div>
            <div className="InstructorTwoSectionCardDownPart">
              <h4>Dylan Meringue</h4>
              <p>Sales Director</p>
            </div>
        </div>
        <div className="InstructorTwoSectionCard" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
          <div className="InstructorTwoSectionCardUpPart">
            <img src={InstructorTwoSectionSevenImg} alt="Instructor_TwoSection_OneImg" />
            <div className="InstructorTwoSectionCardSocials">
              <div className="InstructorSocials"><a href=""><FaInstagram /></a></div> 
              <div className="InstructorSocials"><a href=""><AiOutlineLinkedin /></a></div> 
              <div className="InstructorSocials"><a href=""><FaTwitter /></a></div> 
              <div className="InstructorSocials"><a href=""><FaFacebookF /></a></div> 
              </div>
          </div>
            <div className="InstructorTwoSectionCardDownPart">
              <h4>Mural Evan</h4>
              <p>Web Application</p>
            </div>
        </div>
        <div className="InstructorTwoSectionCard" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
          <div className="InstructorTwoSectionCardUpPart">
            <img src={InstructorTwoSectionEightImg} alt="Instructor_TwoSection_OneImg" />
            <div className="InstructorTwoSectionCardSocials">
              <div className="InstructorSocials"><a href=""><FaInstagram /></a></div> 
              <div className="InstructorSocials"><a href=""><AiOutlineLinkedin /></a></div> 
              <div className="InstructorSocials"><a href=""><FaTwitter /></a></div> 
              <div className="InstructorSocials"><a href=""><FaFacebookF /></a></div> 
              </div>
          </div>
            <div className="InstructorTwoSectionCardDownPart">
              <h4>Jeffer Smith</h4>
              <p>Analyzer</p>
            </div>
        </div>
        

      </div>
    </div>
  );
};

export default InstructorTwoSection;