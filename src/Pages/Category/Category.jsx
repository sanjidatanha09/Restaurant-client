/* eslint-disable no-unused-vars */
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


import img1 from '../../assets/Category-img/banner3.jpg';

import img2 from '../../assets/Category-img/dessert-bg.jpeg'; 

import img3 from '../../assets/Category-img/pizza-bg.jpg'; 
import img4 from '../../assets/Category-img/salad-bg.jpg'; 
import img5 from '../../assets/Category-img/soup-bg.jpg'; 
import img6 from '../../assets/Category-img/salad-bg.jpg';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle 
            
            subHeading={'From 11.00am to 10.00pm'}
            heading={'Order online'}
            
            >
            </SectionTitle>
            <Swiper
            className='w-[1000px] h-[430px] '
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className=' '>
                    
                    <img className='h-[370px]' src={img1} alt="" />
                    <h1 className='text-white text-center text-uppercase text-3xl -mt-16 bg-opacity-50 bg-black'>Pizza </h1>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <h1>Japanese Sushi </h1> */}
                    <img className='h-[370px]'  src={img2} alt="" />
                    <h1 className='text-white text-center'>Pizza </h1>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <h1>Biriyani </h1> */}
                    <img className='h-[370px]' src={img3} alt="" />
                    <h1 className='text-white text-center'>Pizza </h1>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <h1>Steak Combo </h1> */}
                    <img className='h-[370px]'  src={img4} alt="" />
                    <h1 className='text-white text-center'>Pizza </h1>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <h1>Burger </h1> */}
                    <img className='h-[370px]' src={img5} alt="" />
                    <h1 className='text-white text-center'>Pizza </h1>
                </SwiperSlide>
                <SwiperSlide>
                    {/* <h1>Ice-Cream </h1> */}
                    <img className='h-[370px]' src={img6} alt="" />
                    <h1 className='text-white text-center'>Pizza </h1>
                </SwiperSlide>
                ...
            </Swiper>
            
        </section>
    );
};

export default Category;