/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/shared/Navbar';
import Footer from '../Pages/shared/Footer';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default Main;