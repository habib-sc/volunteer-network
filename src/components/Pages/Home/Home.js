import React from 'react';
import Events from './Events/Events';
import './Home.css';
import HomeSearch from './HomeSearch/HomeSearch';

const Home = () => {
    return (
        <div>
            <HomeSearch></HomeSearch>
            <div className='vn-events-home'>
                <Events></Events>
            </div>
        </div>
    );
};

export default Home;