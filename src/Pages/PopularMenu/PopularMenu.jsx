/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Menuitems from '../shared/Menuitems';

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

        //   normal useEffect
            // useEffect( () =>{
            //     fetch('menu.json')
            //     .then(res => res.json())
            //     .then(data =>setMenu(data))
            // },[])


    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const pupularItems = data.filter(item => item.category === 'popular');
                setMenu(pupularItems)})
    }, [])

    console.log(menu)
    return (
        <section className='max-w-screen-lg mx-auto'>
            <SectionTitle

                subHeading={'From 11.00am to 10.00pm'}
                heading={'From out menu'}

            >
            </SectionTitle>

            <div className='grid grid-cols-2 gap-2 mt-5'>
                {
                    menu.map(menuitems => <Menuitems 
                        key={menuitems._id}
                        menuitems={menuitems}
                    ></Menuitems>)
                }
            </div>


        </section>
    );
};

export default PopularMenu;