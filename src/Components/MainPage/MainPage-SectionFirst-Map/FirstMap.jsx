import AOS from 'aos';
import './FirstMap.css';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import sectionfirstContent from '../../../../SectionFirstMap.json';

function FirstMap() {
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
            className='map-holder'>
            {sectionfirstContent.map((item) => (
                <div
                    data-aos="fade-right"
                    className="sectionfirst__item" key={item.id}>
                    <div className="sectionfirst__item__img">
                        <img src={item.img} alt="" className="sectionfirst-image" />
                        <h1 className="sectionfirst-htag">{item.title[i18n.language]}</h1>
                        <p className="sectionfirst-ptag">{item.text[i18n.language]}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FirstMap