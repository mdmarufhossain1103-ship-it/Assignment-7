import React, { Suspense } from 'react';
import HeroCard from './HeroCard';
import AllCards from './AllCards';
import Hero from './Hero';
import { FadeLoader } from 'react-spinners';

const itemsPromise = fetch('/data.json').then(res=>res.json());

const Home = () => {
    
    return (
        <div>
            <Hero></Hero>
            <HeroCard></HeroCard>
            <Suspense fallback={<div className='h-screen flex justify-center items-center'>
                <FadeLoader color="#102fcb"/>
                </div>}>
                <AllCards itemsPromise={itemsPromise}></AllCards>
            </Suspense>
        </div>
    );
};

export default Home;