import React from 'react';
import Events from './Events/Events';
import HomeSearch from './HomeSearch/HomeSearch';

const Home = () => {
    return (
        <div>
            <HomeSearch></HomeSearch>
            <Events></Events>
        </div>
    );
};

export default Home;