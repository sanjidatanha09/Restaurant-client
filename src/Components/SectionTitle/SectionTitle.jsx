/* eslint-disable no-unused-vars */
import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center font-bold  text-2xl'>
            <p>{subHeading}</p>
            <h3>{heading}</h3>
        </div>
    );
};

export default SectionTitle;