import './MainPage.css'
import { useTranslation } from 'react-i18next';
import Events from './MainPage-Events/Events.jsx';
import React, { useState, useEffect } from 'react';
import Categories from './MainPage-Categories/Categories.jsx';
import Card from './MainPage-SectionThird-CardHolder/Card.jsx';
import FirstMap from './MainPage-SectionFirst-Map/FirstMap.jsx';
import InputHolder from './MainPage-InputHolder/InputHolder.jsx';
import LastSection from './MainPage-LastSection/LastSection.jsx';
import Instructors from './MainPage-Instructors/Instructors.jsx';
import SectionSixth from './MainPage-SectionSixth/SectionSixth.jsx';
import ImageSlider from '../../Components/ImageSlider/ImageSlider.jsx';
import SectionSecond from './MainPage-SectionSecond/SectionSecond.jsx';
import mirta from '../../../mirta.json'

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

      {mirta.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.text[i18n.language]}</h2>
            <img src={item.img} alt="" style={{
              width:"50px"
            }} />
          </div>
        )
      })}

      <section className="sectionslider">
        {slides.length > 0 ? <ImageSlider slides={slides} /> : <p>Loading...</p>}
      </section>

      <section className="sectionfirst">
        <FirstMap />
        <InputHolder />
      </section>

      <section className="sectionsecond">
        <SectionSecond />
      </section>

      <section className="sectionthird">
        <Card />
      </section>

      <section className="sectionfourth">
        <Categories />
      </section>

      <section className="sectionfifth">
        <Instructors />
      </section>

      <section className="sectionsixth">
        <SectionSixth />
      </section>

      <section className="setionseventh">
        <Events />
      </section>

      <section className="sectioneighth">
        <LastSection />
      </section>
    </div>
  );
}

export default MainPage;
