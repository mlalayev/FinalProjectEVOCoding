import React, { useEffect } from 'react';
import './InputHolder.css';
import { useTranslation } from 'react-i18next';
import CountDown from '../MainPage-CountDown/CountDown';
import AOS from 'aos';
import 'aos/dist/aos.css';

function InputHolder() {
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
            className="inputholder-sectionfirst">
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

            <CountDown />
        </div>
    )
}

export default InputHolder