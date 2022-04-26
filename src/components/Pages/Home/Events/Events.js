import React from 'react';
import useEvents from '../../../../hooks/useEvents';
import Event from './Event/Event';
import './Events.css';

const Events = () => {
    const [events, setEvents] = useEvents();

    return (
        <div className='container vn-events'>
            <div className='row row-cols-4 gap-4'>
                {
                    events.map(event => <Event key={event.id} event={event}></Event>)
                }
            </div>
        </div>
    );
};

export default Events;