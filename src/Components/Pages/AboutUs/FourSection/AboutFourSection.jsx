import Aos from "aos";
import "aos/dist/aos.css";
import "./AboutFourSection.css";
import '../../../Common/Root.css';
import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import aboutData from "./AboutFourSection.json"; 

const AboutFourSection = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 2000,
      easing: "ease",
      once: true
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
          <h2>{t(aboutData.sectionHeader.header)}</h2>
          <i>{t(aboutData.sectionHeader.text)}</i>
        </div>
        <div className="AboutFourCardSection">
          {aboutData.members.map((member) => (
            <div
              key={member.id}
              className="AboutFourSectionCardItem"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="RoundDiv">
                <img src={member.avatar} alt="RoundDivImg" />
              </div>
              <h5>{member.name}</h5>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutFourSection;
