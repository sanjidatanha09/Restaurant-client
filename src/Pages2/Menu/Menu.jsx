/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Cover/Cover';
import menuImg from '../../assets/menu-img/image-5.jpg'
import PopularMenu from '../../Pages/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Hello World</title>
                
            </Helmet>
            <Cover img = {menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;