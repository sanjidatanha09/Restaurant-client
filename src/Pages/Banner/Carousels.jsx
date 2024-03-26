/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/Carousels-img/Carousel-1.avif';

import img2 from '../../assets/Carousels-img/Carousel-2.jpg';

import img3 from '../../assets/Carousels-img/Carousel-3.jpg';
import img4 from '../../assets/Carousels-img/Carousel-4.jpg';
import img5 from '../../assets/Carousels-img/Carousel-5.jpg';
import img6 from '../../assets/Carousels-img/Carousel-6.jpg';


const Carousels = () => {
    return (
        <div className=''>
            <Carousel className=' h-[1000px]'>
                <div className='h-[700px] '>
                    <img className='h-full' src={img1} />
                    <p className="legend">Place 1</p>
                </div>
                <div className='h-[500px] '>
                    <img className='h-full' src={img2} />
                    <p className="legend">Place 2</p>
                </div>
                <div className='h-[500px] '>
                    <img className='h-full'  src={img3} />
                    <p className="legend">Place 3</p>
                </div>
                <div className='h-[500px] '>
                    <img className='h-full' src={img4} />
                    <p className="legend">Place 4</p>
                </div>
                <div className='h-[500px] '>
                    <img className='h-full' src={img5} />
                    <p className="legend">Place 5</p>
                </div>
                <div className='h-[500px] '>
                    <img className='h-full' src={img6} />
                    <p className="legend">Place 6</p>
                </div>
               
            </Carousel>
        </div>
    );
};

export default Carousels;