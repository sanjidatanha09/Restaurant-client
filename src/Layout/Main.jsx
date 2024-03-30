/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/shared/Navbar';
import Footer from '../Pages/shared/Footer';

const Main = () => {

    // for location check
    const location = useLocation();
    console.log(location);

    //this is remove  navbar and footer if page is login or register

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('registration');

    return (
        <div>

            {noHeaderFooter || <Navbar></Navbar>}
            
            <Outlet></Outlet>

            {noHeaderFooter || <Footer></Footer>}
          
        </div>
    );
};

export default Main;