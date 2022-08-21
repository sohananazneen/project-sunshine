import React from 'react';
import About from '../About/About';
import Banner from './Banner';
import Faq from './Faq';
import Services from './Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Faq></Faq>
        </>
    );
};

export default Home;