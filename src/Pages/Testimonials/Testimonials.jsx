/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getReviewData')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <section className='my-12'>
            <SectionTitle

                subHeading={'What our client say'}
                heading={'Testimonials'}

            >
            </SectionTitle>

            <Swiper
               
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='my-16 mx-24 flex  flex-col items-center'>
                            <Rating
                                style={{ maxWidth: 200 }}
                                value={review.rating}
                                readOnly
                            />


                            <p>{review.details}</p>
                            <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;