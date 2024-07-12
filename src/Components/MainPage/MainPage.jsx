import './MainPage.css'
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect, useRef } from 'react';
import sectionfirstContent from '../../../SectionFirstMap.json';
import ImageSlider from '../../Components/ImageSlider/ImageSlider.jsx';
import sectionsecondimage from '../../assets/mainpagesectiontwo.png'
import Card from './MainPage-SectionThird-CardHolder/Card.jsx'
import Categories from './MainPage-Categories/Categories.jsx'
import CountDown from './MainPage-CountDown/CountDown.jsx'

function MainPage() {
  const { t, i18n } = useTranslation();
  const [slides, setSlides] = useState([]);

  


  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch('../../../SliderImgText.json');
        const data = await response.json();
        setSlides(data[i18n.language] || []);
      } catch (error) {
        console.error('Error fetching the slides data:', error);
      }
    };

    fetchSlides();
  }, [i18n.language]);




  return (
    <div id='body'>
      <section className="sectionslider">
        {slides.length > 0 ? <ImageSlider slides={slides} /> : <p>Loading...</p>}
      </section>

      <section className="sectionfirst">
        {sectionfirstContent.map((item) => (
          <div className="sectionfirst__item" key={item.id}>
            <div className="sectionfirst__item__img">
              <img src={item.img} alt="" className="sectionfirst-image" />
              <h1 className="sectionfirst-htag">{item.title[i18n.language]}</h1>
              <p className="sectionfirst-ptag">{item.text[i18n.language]}</p>
            </div>
          </div>
        ))}
        <div className="inputholder-sectionfirst">
          <div className="inputholder-text-holder">
            <h1>{t('mainpage.registrationtextone')}</h1>
            <h1>{t('mainpage.registrationtexttwo')}</h1>
          </div>

          <div className="inputs">
            <input type="text" placeholder={t('mainpage.inputtextone')} className="input" id='inputone' />
            <input type="text" placeholder={t('mainpage.inputtexttwo')} className="input" id='inputtwo' />
            <input type="text" placeholder={t('mainpage.inputtextthree')} className="input" id='inputthree' />
            <select name="" id="select">
              <option value="">C Developer</option>
              <option value="">Java Developer</option>
              <option value="">Back-End Developer</option>
              <option value="">Front-End Developer</option>
            </select>
            <button className='inputs-button'>{t('mainpage.buttonfirsttext')}</button>
          </div>

          <CountDown/>
        </div>
      </section>

      <section className="sectionsecond">
        <img src={sectionsecondimage} alt="course-pic" className='sectionsecondimage' />

        <h1>{t('mainpage.sectionsecondtexthone')}</h1>
        <p className='blue font-light'>{t('mainpage.sectionsecondtextptag')}</p>
        <p className='gray line-height'>{t('mainpage.sectionsecondtextthree')}</p>
        <p className='call-us font-bold margin-ten'>{t('mainpage.callus')}<span className='blue font-light'>+456 968 562 75</span></p>
        <button className='mainpagebutton'>{t('mainpage.button')}</button>
      </section>

      <section className="sectionthird">
        <Card />
      </section>

      <section className="sectionfourth">
        <Categories />
      </section>
    </div>
  );
}

export default MainPage;
