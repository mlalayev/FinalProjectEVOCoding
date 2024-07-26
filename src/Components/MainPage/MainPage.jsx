import AOS from 'aos';
import './MainPage.css';
import 'aos/dist/aos.css';
import '../Common/Root.css';
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

function MainPage() {
  const { t, i18n } = useTranslation();
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: '1s',
      duration: 3000,
      easing: 'ease',
      once: true
    });
  }, []);

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

      <section
        data-aos="fade-right"
        className="sectionfirst">
        <FirstMap />
        <InputHolder />
      </section>

      <section
        data-aos="fade-right"
        className="sectionsecond">
        <SectionSecond />
      </section>

      <section
        data-aos="fade-right"
        className="sectionthird">
        <Card />
      </section>

      <section
        data-aos="fade-right"
        className="sectionfourth">
        <Categories />
      </section>

      <section
        data-aos="fade-right"
        className="sectionfifth">
        <Instructors />
      </section>

      <section
        data-aos="fade-right"
        className="sectionsixth">
        <SectionSixth />
      </section>

      <section
        data-aos="fade-right"
        className="setionseventh">
        <Events />
      </section>

      <section
        data-aos="fade-right"
        className="sectioneighth">
        <LastSection />
      </section>
    </div>
  );
}

export default MainPage;
