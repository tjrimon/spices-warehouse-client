import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot, faUserTie, faLocation } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import InventoryItemsSection from '../CommonSection/Inventory/InventoryItemsSection';

const Home = () => {
    return (
        <div>
            <div className='bg-[url("https://i.ibb.co/Sdj1pMB/bannerbg.jpg")] bg-cover bg-center bg-no-repeat text-white'>
                <div className='bg-[#0000006e] text-center py-[250px]'>
                    <h1 className='text-white text-3xl md:text-4xl uppercase font-semibold'>All Spices you need !</h1>
                    <p className='py-5 text-lg px-6'>For 5 years, we maintaining the standard of spices without any damage. we care about quality products and our<br /> stored products comes with a lot of checking. store your products and be a member with us.</p>
                    <button className='bg-indigo-500 font-semibold py-3 px-6 rounded-full'><Link to='inventory'>Stock Spices</Link></button>
                </div>
            </div>
            <div className='container mx-auto my-20'>
                <h1 className='text-center text-3xl md:text-4xl uppercase font-semibold'>top Spices</h1>
                <InventoryItemsSection></InventoryItemsSection>
                <button className='bg-indigo-500 text-white mt-10 py-3 px-6 rounded-full mx-auto block'><Link to='inventory'>Visit All Stock</Link></button>
            </div>
            <div className='bg-[url("https://i.ibb.co/34TqLLM/bg-shape.png")] py-28 bg-cover bg-center bg-no-repeat'>
                <h1 className='text-center text-3xl md:text-4xl uppercase font-semibold'>We are known for trend-selling styles and<br /> customization.</h1>
                <p className='text-center text-xl pt-5'>Believe In Us</p>
                <div className='container mx-auto'>
                    <div>
                        <FontAwesomeIcon icon={faPepperHot}></FontAwesomeIcon>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;