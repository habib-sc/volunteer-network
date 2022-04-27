import React from 'react';
import Events from '../Home/Events/Events';
import HomeSearch from '../Home/HomeSearch/HomeSearch';

const EventsPage = () => {
    return (
        <div>
            <HomeSearch></HomeSearch>
            <Events></Events>
        </div>
    );
};

export default EventsPage;