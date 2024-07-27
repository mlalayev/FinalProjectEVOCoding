import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import '../Courses/course.css';
import { MdNavigateNext } from "react-icons/md";
import { TfiLayoutGrid3Alt, TfiMenuAlt } from "react-icons/tfi";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import { TbClockHour4Filled } from "react-icons/tb";
import { FaSignal } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import { FaPuzzlePiece } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";

import { data } from '../Courses/json';

const Course = () => {
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState('');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <main className="course">
      <div className="home-course">
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <p style={{ color: '#ACACAC', cursor: 'pointer' }}>{t('Home')}</p>
        </Link>
        <p style={{ marginTop: '7px' }}><MdNavigateNext /></p>
        <p>{t('All courses')}</p>
      </div>

      <div className="search">
        <h1>{t('All Courses')}</h1>
        <div className="search-right">
          <div className="inputSearch">
            <input
              type="text"
              name="text"
              id="text"
              placeholder={t('search')}
              style={{ paddingLeft: '20px' }}
              onChange={(e) => setSearch(e.target.value)}
            />
            <p><IoSearchSharp /></p>
          </div>
          <p className="icon"><TfiLayoutGrid3Alt /></p>
          <p className="icon"><TfiMenuAlt /></p>
        </div>
      </div>

      {data.filter((item) => {
        return search.toLowerCase() === '' ? item : item.skill.en.toLowerCase().includes(search.toLowerCase());
      }).map((item) => (
        <div className="cards" key={item.id}>
          <div className="photo">
            <img src={item.image} alt="" />
          </div>
          <div className="information">
            <div className="card_up">
              <div className="button_up">
                <span>{item.skill[i18n.language]}</span>
              </div>
              <a href="#" style={{ color: '#72ACFF' }}>{item.name}</a>
            </div>
            <div className="card_info">
              <h2>{item.course_name[i18n.language]}</h2>
            </div>
            <div className="card_icons">
              <div className="icon">
                <span><TbClockHour4Filled /></span>
                <p>{t('weeks')}</p>
              </div>
              <div className="icon">
                <span><FaSignal /></span>
                <p>{t('levels')}</p>
              </div>
              <div className="icon">
                <span><MdCollectionsBookmark /></span>
                <p>{t('lessons')}</p>
              </div>
              <div className="icon">
                <span><FaPuzzlePiece /></span>
                <p>{t('quiz')}</p>
              </div>
              <div className="icon">
                <span><PiStudentBold /></span>
                <p>{t('students')}</p>
              </div>
            </div>
            <div className="card_text">
              <p>Fusi absolutam contra licentiam contenti verba tu solebat callido
                anteponebas positum amicos moriare praestantia disputare…</p>
            </div>
            <div className="card_price">
              <p>{item.price}</p>
              <Link to={'/view'}><button>{t('viewMore')}</button></Link>
            </div>
          </div>
        </div>
      ))}

      <div className="course_pages">
        <button style={{ backgroundColor: '#007bff', color: '#FFFF' }}>1</button>
        <button>2</button>
        <button style={{ marginBottom: '20px' }}><GrLinkNext /></button>
      </div>
    </main>
  );
}

export default Course;
