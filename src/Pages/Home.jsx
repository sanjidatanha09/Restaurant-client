/* eslint-disable no-unused-vars */
import React from 'react';
import Carousels from './Banner/Carousels';
import Category from './Category/Category';
import PopularMenu from './PopularMenu/PopularMenu';
import Feature from './Featured/Feature';
import Testimonials from './Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            {/* title bar change */}
            <Helmet>
                <title>Home||Fancy-Restuarent</title>
               
            </Helmet>
            <Carousels></Carousels>
            <Category></Category>
            <PopularMenu></PopularMenu>
           <Feature></Feature>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;