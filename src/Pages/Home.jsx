/* eslint-disable no-unused-vars */
import React from 'react';
import Carousels from './Banner/Carousels';
import Category from './Category/Category';
import PopularMenu from './PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Carousels></Carousels>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;