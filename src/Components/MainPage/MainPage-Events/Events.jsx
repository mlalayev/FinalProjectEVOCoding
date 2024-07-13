import React from 'react';
import './Events.css';
import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import eventsData from '../../../../Events.json'; // Adjust the path as necessary

function Events() {
    return (
        <div className='center column'>
            <h1>Our Upcoming Events</h1>
            <p>Jeffrey crikey victoria sponge mush spiffing super arse over tit matie boy smashing. The little rotter off his nut codswallop.!</p>

            <div className="events-holder">
                {eventsData.map((event, index) => (
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
