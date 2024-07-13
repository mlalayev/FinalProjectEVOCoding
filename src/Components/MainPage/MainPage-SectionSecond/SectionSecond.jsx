import React, { useEffect } from 'react';
import './SectionSecond.css';
import { useTranslation } from 'react-i18next';
import sectionsecondimage from '../../../assets/mainpagesectiontwo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SectionSecond() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        AOS.init({
            offset: 100,
            delay: 0,
            duration: 2000,
            easing: 'ease',
            once: false
        });
    }, []);

    return (
        <div
            data-aos="fade-right"
        >
            <img src={sectionsecondimage} alt="course-pic" className='sectionsecondimage' />

            <h1>{t('mainpage.sectionsecondtexthone')}</h1>
            <p className='blue font-light'>{t('mainpage.sectionsecondtextptag')}</p>
            <p className='gray line-height'>{t('mainpage.sectionsecondtextthree')}</p>
            <p className='call-us font-bold margin-ten'>{t('mainpage.callus')}<span className='blue font-light'>+456 968 562 75</span></p>
            <button className='mainpagebutton'>{t('mainpage.button')}</button>
        </div>
    )
}

export default SectionSecond