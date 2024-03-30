/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/shared/Navbar';
import Footer from '../Pages/shared/Footer';

const Main = () => {

    // for location check
    const location = useLocation();
    console.log(location);

    const noHeaderFooter = location.pathname.includes('login')

    return (
        <div>

            {noHeaderFooter || <Navbar></Navbar>}
            
            <Outlet></Outlet>
            
            {noHeaderFooter || <Footer></Footer>}
          
        </div>
    );
};

export default Main;