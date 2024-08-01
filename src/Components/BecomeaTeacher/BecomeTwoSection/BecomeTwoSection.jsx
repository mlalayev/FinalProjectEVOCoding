import Aos from "aos";
import "aos/dist/aos.css";
import '../../Common/Root.css';
import "./BecomeTwoSection.css";
import React, { useEffect } from "react";
import { FaBookmark } from "react-icons/fa";
import PagesHeaderProps from "../../Pages/AboutUs/Onesection/PagesHeaderProps";
import { useTranslation } from "react-i18next";

const BecomeTwoSection = () => {
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
    <PagesHeaderProps title = {t('header.becomeateacher')} />
      <div className="BecomeTwoSectionBody" data-aos="zoom-in">
      <div className="notification">
        <span>  
        {t('becomeateacher.havacc')} <a href="signup">{t('becomeateacher.loginputthree')}</a> 
        </span>
       <div className="ribbon"><i><FaBookmark /></i></div>
      </div>
      </div>
      <section className="become-teacher">
  <div className="container" data-aos="zoom-in">
    <h2>{t('becomeateacher.containerhead')}</h2>
    <p>
    {t('becomeateacher.containertitle')}
    </p>
    <form action="#" method="post">
      <div className="form-group">
        <label htmlFor="name">{t('becomeateacher.formname')}</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">{t('becomeateacher.formemail')}</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="experience">{t('becomeateacher.formexperience')}</label>
        <textarea
          id="experience"
          name="experience"
          rows={4}
          required
          defaultValue={""}
        />
      </div>
      <button type="submit" className="submit-btn">
      {t('becomeateacher.formapply')}
      </button>
    </form>
  </div>
</section>







</>
  );
};

export default BecomeTwoSection;
