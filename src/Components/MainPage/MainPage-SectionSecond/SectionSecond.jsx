import AOS from 'aos';
import 'aos/dist/aos.css';
import './SectionSecond.css';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import sectionsecondimage from '../../../assets/mainpagesectiontwo.png';

function SectionSecond() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        AOS.init({
          offset: 200,
          delay: '1s',
          duration: 3000,
          easing: 'ease',
          once: true
        });
      }, []);

    return (
        <div
            data-aos="fade-right"
            className='second-section-holder'
        >
            <img src={sectionsecondimage} alt="course-pic" className='sectionsecondimage' />
            <div className="section-second-text-holder">
                <h1>{t('mainpage.sectionsecondtexthone')}</h1>
                <p className='blue font-light'>{t('mainpage.sectionsecondtextptag')}</p>
                <p className='gray line-height'>{t('mainpage.sectionsecondtextthree')}</p>
                <p className='call-us font-bold margin-ten'>{t('mainpage.callus')}<span className='blue font-light'>+456 968 562 75</span></p>
                <button className='mainpagebutton'>{t('mainpage.button')}</button>
            </div>
        </div>
    )
}

export default SectionSecond