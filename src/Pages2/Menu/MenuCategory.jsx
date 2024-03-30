/* eslint-disable no-unused-vars */
import React from 'react';
import Menuitems from '../../Pages/shared/Menuitems';
import Cover from '../Cover/Cover';
import { Link } from 'react-router-dom';

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
            <Link to={`/orderfood/${title}`}>
                <button className='btn btn-outline border-0 border-b-4 mt-4'>Order</button>
            </Link>
        </div>
    );
};

export default MenuCategory;