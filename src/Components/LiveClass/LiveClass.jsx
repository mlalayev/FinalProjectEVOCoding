import "./LiveClass.css";
import React, { useState, useEffect } from "react";
import "../Common/Root.css";
import LiveClassImg from "../../assets/liveclass.jpg";
import CountDown from "../MainPage/MainPage-CountDown/CountDown";
import PagesHeaderProps from "../Pages/AboutUs/Onesection/PagesHeaderProps";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";

const LiveClass = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      delay: "1s",
      duration: 3000,
      easing: "ease",
      once: true,
    });
  }, []);
  const { t, i18n } = useTranslation();
  return (
    <>
      <PagesHeaderProps title={t("footer.liveclass")} />
      <div className="LiveClassContainerBodys" data-aos="fade-right">
        <div className="LiveClassContainer">
          <div className="left-section">
            <div className="image-section">
              <img src={LiveClassImg} alt="Toplantı Görseli" />
            </div>
            <div className="text-section">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <p>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione."
              </p>
            </div>
          </div>
          <div className="details-section">
            <b>
              <CountDown
                textColor="white"
                bgColor="black"
                borderTop={false}
                width="90px"
              />
            </b>
            <div className="details">
              <h2>Details</h2>
              <p>
                <strong>Subject:</strong> <i>First Meeting</i>
              </p>
              <p>
                <strong>Host:</strong> <i>Admin</i>
              </p>
              <p>
                <strong>Date:</strong> <i>Saturday, November 30, 2024 23:26</i>
              </p>
              <p>
                <strong>Duration:</strong> <i>1 hour 0 minutes</i>
              </p>
              <p>
                <strong>Current Time Zone:</strong> <i>Asia/Dhaka</i>
              </p>
              <p>
                <em>Note:</em>{" "}
                <i>The countdown time is shown in your local time zone.</i>
              </p>
            </div>
            <div className="buttons">
              <button className="zoom">Join with Zoom App</button>
              <button className="web">Join with Web Browser</button>
              <button className="start">Start Meeting</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveClass;
