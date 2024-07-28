import React, { useEffect } from "react";
import "./EventsTwoSection.css";
import { GoClock } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import Aos from "aos";
import "aos/dist/aos.css";
import eventsData from "./eventsData.json";
import { useTranslation } from "react-i18next";
import PagesHeaderProps from "../../AboutUs/Onesection/PagesHeaderProps";

const EventsCard = ({ avatarSrc, date, title, time, location, description }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    Aos.init({
      offset: 120,
      duration: 2000,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <div className="EventsTwoSectionCard" data-aos="fade-up" data-aos-anchor-placement="center-center">
      <div className="EventsTwoSectionCardLeft">
        <img src={avatarSrc} alt="Events Avatar" />
      </div>
      <div className="EventsTwoSectionCardRight">
        <h5>{date[i18n.language]}</h5>
        <h2>{title[i18n.language]}</h2>
        <div className="DateLocation">
          <div className="oclock">
            <i>
              <GoClock />
            </i>
            <p>{time}</p>
          </div>
          <div className="map">
            <i>
              <CiLocationOn />
            </i>
            <p>{location[i18n.language]}</p>
          </div>
        </div>
        <p>{description[i18n.language]}</p>
      </div>
    </div>
  );
};

const EventsTwoSection = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    Aos.init({
      offset: 120,
      duration: 2000,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <>
    <PagesHeaderProps title = {t('pages.events')}/>
    <div className="EventsTwoSectionContainer">
      <div className="EventsTwoSectionTextpart" data-aos="fade-up" data-aos-anchor-placement="center-center">
        <h2>{t('events.title')}</h2>
        <p>
          {t('events.intro')}
        </p>
      </div>
      <div className="EventsTwoSectionCards">
        {eventsData.map((event) => (
          <EventsCard
            key={event.id}
            date={event.date}
            title={event.title}
            avatarSrc={event.avatarSrc}
            time={event.time}
            location={event.location}
            description={event.description}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default EventsTwoSection;
