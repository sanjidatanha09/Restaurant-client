/* eslint-disable no-unused-vars */
import React from 'react';
import Carousels from './Banner/Carousels';
import Category from './Category/Category';
import PopularMenu from './PopularMenu/PopularMenu';
import Feature from './Featured/Feature';

const Home = () => {
    return (
        <div>
            <Carousels></Carousels>
            <Category></Category>
            <PopularMenu></PopularMenu>
           <Feature></Feature>
        </div>
    );
};

export default Home;