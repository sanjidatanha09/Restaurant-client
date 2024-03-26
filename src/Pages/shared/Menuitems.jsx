/* eslint-disable no-unused-vars */
import React from 'react';

const Menuitems = ({menuitems}) => {
    const {name, image, price, recipe} = menuitems
    console.log(menuitems);

    return (
        <div className='flex gap-2'>
            <img className='w-[80px] rounded-lg' style={{borderRadius: ' 0 200px 200px 200px'}} src={image} alt="" />
            <div className='flex gap-2'>
               <div>
                    <h3 className='uppercase'>{name} ------- </h3>
                    <p className='text-sm'>{recipe}</p>
               </div>
                <div>
                    <p className='text-yellow-500'>${price}</p>
                </div>
                
             
            </div>
            <div>
               
            </div>
        </div>
    );
};

export default Menuitems;