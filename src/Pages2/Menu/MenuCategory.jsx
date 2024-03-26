/* eslint-disable no-unused-vars */
import React from 'react';
import Menuitems from '../../Pages/shared/Menuitems';
import Cover from '../Cover/Cover';

const MenuCategory = ({items,title,img}) => {
    return (
        <div>
            {
                title && <Cover img={img} title={title}></Cover>
            }
            
            <div className='grid grid-cols-2 gap-2 my-10'>
                {
                    items.map(menuitems => <Menuitems
                        key={menuitems._id}
                        menuitems={menuitems}
                    ></Menuitems>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;