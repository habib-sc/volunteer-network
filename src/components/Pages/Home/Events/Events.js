import React from 'react';
import useVnEvents from '../../../../hooks/useVnEvents';
import Event from './Event/Event';
import './Events.css';

const Events = () => {
    const [vnEvents, setVnEvents] = useVnEvents();

    return (
        <div className='container'>
            <div className='row row-cols-4 gap-4 justify-content-center'>
                {
                    vnEvents.map(event => <Event event={event} key={event._id}></Event>)
                }
            </div>
        </div>
    );
};

export default Events;