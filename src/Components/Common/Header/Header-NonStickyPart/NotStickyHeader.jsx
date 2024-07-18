import '../Header.css';
import '../../Root.css';
import './NotStickyPart.css';
import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaRegEnvelope } from "react-icons/fa";


function StickyHeader() {
    const { t, i18n } = useTranslation();
    const [isSticky, setIsSticky] = useState(false);

    return (
        <div
        style={{
            maxWidth:"1350px",
            margin:"0 auto"
        }}
        className={`header-upper ${isSticky ? 'hidden' : ''}`}>
            <div className="header-upper-up">
                <a href="" className='header-a-tag margin-bottom'><FaPhone color='#2772FF' /> +464 145 684 325</a>
                <a href="" className='header-a-tag'><FaRegEnvelope color='#2772FF' /> admin@example.com</a>
            </div>
            <div className="header-upper-down">
                <a href="./becomeateacher" className='header-a-tag margin-top'>{t('header.becomeateacher')}</a>
                <a href="./myprofile" className='header-a-tag margin-top'>{t('header.myprofile')}</a>
            </div>
        </div>
    )
}

export default StickyHeader