/* eslint-disable no-unused-vars */
import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import img1 from '../../assets/Featured-img/featured.jpg';
import './Feature.css'

const Feature = () => {
    return (
        <div className='featured-item mt-5 h-[700px] text-white '>
            <SectionTitle

                subHeading={'Check it out'}
                heading={'Featured Item'}

            >
            </SectionTitle>

            <div className='flex  w-full justify-center items-center py-8 px-16   bg-slate-500 bg-opacity-50  mt-20 border '>
                <div className='w-1/2 border h-[400px]'>
                    <img className='h-full  w-full' src={img1} alt="" />
                </div>

                <div className='ml-10 w-1/2 h-full'>
                    <p>
                        Aug 20, 2024
                    </p>
                    <p>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quam, adipisci repellat deserunt id at neque aliquid perferendis accusamus. Itaque a perferendis laborum doloribus, sequi voluptate! Laudantium saepe atque porro.</p>
                    <button className="btn btn-active btn-accent border-0 border-b-4">Accent</button>
                </div>
               
            </div>
        </div>
    );
};

export default Feature;