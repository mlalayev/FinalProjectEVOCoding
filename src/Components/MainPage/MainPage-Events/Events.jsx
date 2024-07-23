import './Events.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import eventsData from '../../../../Events.json';
import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";

function Events() {
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
            style={{
                padding: "80px 0 10px 0"
            }}
            className='center column'>
            <h1>{t('events.title')}</h1>
            <p
                style={{
                    maxWidth: "400px",
                    textAlign: "center",
                    color: "gray",
                    margin: "20px 0"
                }}
            >{t('events.intro')}</p>

            <div className="events-holder">
                {(eventsData[i18n.language]).map((event, index) => (
                    <div
                        data-aos="fade-right"
                        className="events" key={index}>
                        <div className="image-part-events">
                            <img src={event.image} alt="" className='events-image' />
                        </div>
                        <div className="text-part-events">
                            <h1 className='yellow-color'
                                style={{
                                    margin: "10px 0"
                                }}
                            >{event.date}</h1>
                            <h1 className='font-size'
                                style={{
                                    margin: "10px 0"
                                }}>{event.title}</h1>
                            <p className='center text-gray'
                                style={{
                                    margin: "10px 0"
                                }}><IoTimeOutline color='var(--main-blue-color)' />{event.time}</p>
                            <p className='center text-gray'
                                style={{
                                    margin: "10px 0"
                                }}><IoLocationOutline color='var(--main-blue-color)' />{event.location}</p>
                            <p className='text-gray'
                                style={{
                                    margin: "10px 0"
                                }}>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className='events-button'
                style={{
                    margin: "40px 0"
                }}
            >{t('events.button')}</button>
        </div>
    );
}

export default Events;
