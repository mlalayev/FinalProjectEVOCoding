import './CountDown.css';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function CountDown() {

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
            className="countdowntimer">
            <div>
                <p className='blue'>{days}</p>
                <p className='text-gray'>Days</p>
            </div>
            <div>
                <p className='blue'>{hours}</p>
                <p className='text-gray'>Hours</p>
            </div>
            <div>
                <p className='blue'>{minutes}</p>
                <p className='text-gray'>Minutes</p>
            </div>
            <div>
                <p className='blue'>{seconds}</p>
                <p className='text-gray'>Seconds</p>
            </div>
        </div>
    )
}

export default CountDown;