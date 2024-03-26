/* eslint-disable no-unused-vars */
import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import img1 from '../../assets/Featured-img/featured.jpg';

const Feature = () => {
    return (
        <section>
            <SectionTitle

                subHeading={'Check it out'}
                heading={'Featured Item'}

            >
            </SectionTitle>

            <div>
                <div>
                    <img src={img1} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Feature;