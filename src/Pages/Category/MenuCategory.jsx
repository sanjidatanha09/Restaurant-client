/* eslint-disable no-unused-vars */
import React from 'react';
import Menuitems from '../shared/Menuitems';
import Cover from '../../Pages2/Cover/Cover';

const MenuCategory = ({items,title,img}) => {
    return (
        <div>
            {
                title && <Cover img={img} title="our menu"></Cover>
            }
            
            <div className='grid grid-cols-2 gap-2 mt-5'>
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