import './MainPage.css'
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect, useRef } from 'react';
import sectionfirstContent from '../../../SectionFirstMap.json';
import ImageSlider from '../../Components/ImageSlider/ImageSlider.jsx';

function MainPage() {
  const { t, i18n } = useTranslation();
  const [slides, setSlides] = useState([]);

  const initialTime = 143 * 24 * 60 * 60 + 21 * 60 * 60 + 12 * 60 + 30;
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(time / (24 * 60 * 60));
  const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = Math.floor(time % 60);



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

          <div className="countdowntimer">
            <div>
              <p className='blue'>{days}</p>
              <p className='text-gray'>Days</p>
            </div>
            <div>
              <p className='blue'>{hours}</p>
              <p className='text-gray'>Hours</p>
            </div>
            <div>
              <p className='blue'>{minutes}</p>
              <p className='text-gray'>Minutes</p>
            </div>
            <div>
              <p className='blue'>{seconds}</p>
              <p className='text-gray'>Seconds</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
