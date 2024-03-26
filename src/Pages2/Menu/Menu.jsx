/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Cover/Cover';
import menuImg from '../../assets/menu-img/image-5.jpg'
import PopularMenu from '../../Pages/PopularMenu/PopularMenu';
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../../Pages/Category/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert') 
    const soup = menu.filter(item => item.category === 'soup') 
    const salad = menu.filter(item => item.category === 'salad') 
    const pizza = menu.filter(item => item.category === 'dessert') 
    const offered = menu.filter(item => item.category === 'offered') 

    return (
        
        <div>
            <Helmet>
                <title>Hello World</title>
                
            </Helmet>
            <Cover img = {menuImg} title="our menu"></Cover>

            {/* main cover */}

            <SectionTitle subHeading='Dont Miss' heading='Todays offer'></SectionTitle>

            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert menu items */}
            <MenuCategory 
            items={dessert}
            title="Dessert"
            img ={menuImg}
            
            ></MenuCategory>


            {/* soup menu items */}
            <MenuCategory items={soup}></MenuCategory>


            {/* salad menu items */}
            <MenuCategory items={salad}></MenuCategory>

            {/* pizza menu items */}
            <MenuCategory items={pizza}></MenuCategory>
            
           
        </div>
    );
};

export default Menu;