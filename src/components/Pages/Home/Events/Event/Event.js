import React from 'react';
import './Event.css';

const Event = (props) => {
    const { event } = props;
    return (
        <div className='p-0' style={{ width: '260px', position: 'relative' }}>
            <img src={event.img} className='w-100' style={{borderRadius: '18px'}} alt="" />
            <div className='vn-event-body'>
                <h4 className='py-3 text-center text-white'>{event.title}</h4>
            </div>
        </div>
    );
};

export default Event;