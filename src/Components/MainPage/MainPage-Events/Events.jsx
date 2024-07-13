import React from 'react';
import './Events.css';
import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import eventsData from '../../../../Events.json'; // Adjust the path as necessary
import { useTranslation } from 'react-i18next';

function Events() {
    const { t, i18n } = useTranslation();

    // Determine which language data to use based on current i18next language
    let lang = i18n.language.substr(0, 2); // Get language code (en, az, ru)
    let events = eventsData[lang] || []; // Default to empty array if language data not found

    return (
        <div className='center column'>
            <h1>{t('events.title')}</h1>
            <p>{t('events.intro')}</p>

            <div className="events-holder">
                {events.map((event, index) => (
                    <div className="events" key={index}>
                        <div className="image-part-events">
                            <img src={event.image} alt="" className='events-image' />
                        </div>
                        <div className="text-part-events">
                            <h1 className='yellow-color'>{event.date}</h1>
                            <h1 className='font-size'>{event.title}</h1>
                            <p className='center text-gray'><IoTimeOutline color='var(--main-blue-color)' />{event.time}</p>
                            <p className='center text-gray'><IoLocationOutline color='var(--main-blue-color)' />{event.location}</p>
                            <p className='text-gray'>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;
