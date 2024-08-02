import AOS from 'aos';
import '../../Common/Root.css';
import './CountDown.css';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

function CountDown({ textColor = 'blue', bgColor = 'transparent', borderTop = true, width = "width" }) {
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

    const initialTime = 143 * 24 * 60 * 60 + 21 * 60 * 60 + 12 * 60 + 30;
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const days = Math.floor(time / (24 * 60 * 60));
    const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = Math.floor(time % 60);

    return (
        <div
            data-aos="fade-right"
            className="countdowntimer"
            style={{
                borderTop: borderTop ? '1px solid var(--main-blue-line-color)' : 'none'
            }}>
            <div style={{backgroundColor: bgColor, width: width }}>
                <p style={{ color: textColor}}>{days}</p>
                <p className='text-gray'>{t('mainpage.days')}</p>
            </div>
            <div style={{backgroundColor: bgColor, width: width }}>
                <p style={{ color: textColor }}>{hours}</p>
                <p className='text-gray'>{t('mainpage.hours')}</p>
            </div>
            <div style={{backgroundColor: bgColor, width: width }}>
                <p style={{ color: textColor }}>{minutes}</p>
                <p className='text-gray'>{t('mainpage.minutes')}</p>
            </div>
            <div style={{backgroundColor: bgColor, width: width }}>
                <p style={{ color: textColor }}>{seconds}</p>
                <p className='text-gray'>{t('mainpage.seconds')}</p>
            </div>
        </div>
    );
}

export default CountDown;
