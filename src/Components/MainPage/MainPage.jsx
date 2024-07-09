import './MainPage.css'
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect, useRef } from 'react';
import sectionfirstContent from '../../../SectionFirstMap.json';
import ImageSlider from '../../Components/ImageSlider/ImageSlider.jsx';

function MainPage() {
  const { i18n } = useTranslation();
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
      </section>
    </div>
  );
}

export default MainPage;
