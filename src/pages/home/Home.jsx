import React from 'react';
import Hero from './hero';
import HeroCard from './HeroCard';
import AllCards from './AllCards';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HeroCard></HeroCard>
            <AllCards></AllCards>
        </div>
    );
};

export default Home;