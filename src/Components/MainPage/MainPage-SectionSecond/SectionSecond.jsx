import React from 'react'
import sectionsecondimage from '../../../assets/mainpagesectiontwo.png'
import { useTranslation } from 'react-i18next';
import './SectionSecond.css'

function SectionSecond() {
    const { t, i18n } = useTranslation();

    return (
        <div>
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