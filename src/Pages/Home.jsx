/* eslint-disable no-unused-vars */
import React from 'react';
import Carousels from './Banner/Carousels';
import Category from './Category/Category';
import PopularMenu from './PopularMenu/PopularMenu';
import Feature from './Featured/Feature';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Carousels></Carousels>
            <Category></Category>
            <PopularMenu></PopularMenu>
           <Feature></Feature>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;