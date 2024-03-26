/* eslint-disable no-unused-vars */
import React from 'react';

const Menuitems = ({menuitems}) => {
    const {name, image, price, recipe} = menuitems
    console.log(menuitems);

    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default Menuitems;