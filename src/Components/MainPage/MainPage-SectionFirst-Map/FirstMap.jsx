import React from 'react'
import './FirstMap.css'
import sectionfirstContent from '../../../../SectionFirstMap.json';
import { useTranslation } from 'react-i18next';


function FirstMap() {
    const { t, i18n } = useTranslation();

    return (
        <>
            {sectionfirstContent.map((item) => (
                <div className="sectionfirst__item" key={item.id}>
                    <div className="sectionfirst__item__img">
                        <img src={item.img} alt="" className="sectionfirst-image" />
                        <h1 className="sectionfirst-htag">{item.title[i18n.language]}</h1>
                        <p className="sectionfirst-ptag">{item.text[i18n.language]}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default FirstMap