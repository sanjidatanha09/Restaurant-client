/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import FoodCard from '../FoodCard/FoodCard';


const OrderTab = ({ items }) => {
  

    return (
        <div>

            <Swiper
                pagination={Pagination}
                modules={[Pagination]}
                className='mySwiper'
            >

                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            items.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>

                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default OrderTab;