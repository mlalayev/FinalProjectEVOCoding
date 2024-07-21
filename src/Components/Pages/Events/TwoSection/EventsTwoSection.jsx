import React, { useEffect } from "react";
import "./EventsTwoSection.css";
import EventsTwoSectionImgOneAvatar from "../../../../assets/Pages/Events/eventsavatar1.png";
import EventsTwoSectionImgTwoAvatar from "../../../../assets/Pages/Events/eventsavatar2.png";
import EventsTwoSectionImgThreeAvatar from "../../../../assets/Pages/Events/eventsavatar3.png";
import { GoClock } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import Aos from "aos";
import "aos/dist/aos.css";

const EventsTwoSection = () => {
  useEffect(() => {
    Aos.init({
      offset: 120,
      duration: 2000,
      easing: "ease",
      once: true,
    });
  }, []);
  return (
    <div className="EventsTwoSectionContainer">
      <div className="EventsTwoSectionTextpart" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
      <h2>Our Upcoming Events</h2>
      <p>
        Jeffrey crikey victoria sponge mush spiffing super arse over tit matie
        boy smashing. The little rotter off his nut codswallop.!
      </p>
      </div>
        <div className="EventsTwoSectionCards">
          <div className="EventsTwoSectionCard" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
            <div className="EventsTwoSectionCardLeft">
              <img
                src={EventsTwoSectionImgOneAvatar}
                alt="Events_TwoSection_Img_OneAvatar"
              />
            </div>
            <div className="EventsTwoSectionCardRight">
              <h5>14 JANUARY, 2023</h5>
              <h2>Why you Need Advance Developmemt Process Course?</h2>
              <div className="DateLocation">
                <div className="oclock">
                  <i>
                    <GoClock />
                  </i>
                  <p>8.30 AM - 5.30 PM</p>
                </div>
                <div className="map">
                  <i>
                    <CiLocationOn />
                  </i>
                  <p>9 Road, Mirpur Dohs, New York, USA</p>
                </div>
              </div>
              <p>
                He lost his bottle bamboozled golly gosh some dodgy chav only a
                quid my lady chip shop argy-bargy, the bee's knees morish loo
                get stuffed mate pardon me zonked knees.!
              </p>
            </div>
          </div>
          <div className="EventsTwoSectionCard" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
            <div className="EventsTwoSectionCardLeft">
              <img
                src={EventsTwoSectionImgTwoAvatar}
                alt="Events_TwoSection_Img_OneAvatar"
              />
            </div>
            <div className="EventsTwoSectionCardRight">
              <h5>14 JANUARY, 2023</h5>
              <h2>Graphic Illustration: Design with Color and Shape</h2>
              <div className="DateLocation">
                <div className="oclock">
                  <i>
                    <GoClock />
                  </i>
                  <p>8.30 AM - 5.30 PM</p>
                </div>
                <div className="map">
                  <i>
                    <CiLocationOn />
                  </i>
                  <p>9 Road, Mirpur Dohs, New York, USA</p>
                </div>
              </div>
              <p>
                He lost his bottle bamboozled golly gosh some dodgy chav only a
                quid my lady chip shop argy-bargy, the bee's knees morish loo
                get stuffed mate pardon me zonked knees.!
              </p>
            </div>
          </div>
          <div className="EventsTwoSectionCard" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
            <div className="EventsTwoSectionCardLeft">
              <img
                src={EventsTwoSectionImgThreeAvatar}
                alt="Events_TwoSection_Img_OneAvatar"
              />
            </div>
            <div className="EventsTwoSectionCardRight">
              <h5>14 JANUARY, 2023</h5>
              <h2>Magazine Design Start to Finish: The Inside Pages</h2>
              <div className="DateLocation">
                <div className="oclock">
                  <i>
                    <GoClock />
                  </i>
                  <p>8.30 AM - 5.30 PM</p>
                </div>
                <div className="map">
                  <i>
                    <CiLocationOn />
                  </i>
                  <p>9 Road, Mirpur Dohs, New York, USA</p>
                </div>
              </div>
              <p>
                He lost his bottle bamboozled golly gosh some dodgy chav only a
                quid my lady chip shop argy-bargy, the bee's knees morish loo
                get stuffed mate pardon me zonked knees.!
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default EventsTwoSection;
