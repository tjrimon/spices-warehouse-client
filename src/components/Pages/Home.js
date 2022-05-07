import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot, faUserTie, faLocation, faAward } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import InventoryItemsSection from '../CommonSection/Inventory/InventoryItemsSection';
import Footer from '../CommonSection/Footer';

const Home = () => {
    return (
        <div>
            <div className='bg-[url("https://i.ibb.co/Sdj1pMB/bannerbg.jpg")] bg-cover bg-center bg-no-repeat text-white'>
                <div className='bg-[#0000006e] text-center py-[250px]'>
                    <h1 className='text-white text-3xl md:text-4xl uppercase font-semibold'>All Spices you need !</h1>
                    <p className='py-5 text-lg px-6'>For 5 years, we maintaining the standard of spices without any damage. we care about quality products and our<br /> stored products comes with a lot of checking. store your products and be a member with us.</p>
                    <button className='hover:bg-indigo-500 bg-orange-500 font-semibold py-3 px-6 rounded-full'><Link to='inventory'>Stock Spices</Link></button>
                </div>
            </div>


            <div className='container mx-auto my-20'>
                <h1 className='text-center text-3xl md:text-4xl uppercase font-semibold'>top Spices</h1>
                <InventoryItemsSection></InventoryItemsSection>
                <button className='hover:bg-indigo-500 bg-orange-500 text-white mt-10 py-3 px-6 rounded-full mx-auto block'><Link to='inventory'>Visit All Stock</Link></button>
            </div>


            <div className='bg-[#F6F6F6] py-28 '>
                <h1 className='text-center text-3xl md:text-4xl uppercase font-semibold pb-14'>We are known for trend-selling styles and<br /> customization.</h1>
                <div className='container mx-auto grid md:grid-cols-2  lg:grid-cols-4 justify-center items-center'>
                    <div className='rounded-lg w-[250px] lg:w-[200px] xl:w-[250px] h-60 pt-16 text-orange-600 text-center bg-white mr-10'>
                        <FontAwesomeIcon className='text-4xl' icon={faPepperHot}></FontAwesomeIcon>
                        <h3 className='text-2xl font-semibold pb-1 pt-2'>120+</h3>
                        <p className='font-semibold'>Spices in stock</p>
                    </div>
                    <div className='rounded-lg mt-10 w-[250px] lg:w-[200px] xl:w-[250px] h-60 pt-16 text-orange-600 text-center bg-white mr-10'>
                        <FontAwesomeIcon className='text-4xl' icon={faUserTie}></FontAwesomeIcon>
                        <h3 className='text-2xl font-semibold pb-1 pt-2'>20k</h3>
                        <p className='font-semibold'>Happy Customers</p>
                    </div>
                    <div className='rounded-lg mt-10 md:mt-0 w-[250px] lg:w-[200px] xl:w-[250px] h-60 pt-16 text-orange-600 text-center bg-white mr-10'>
                        <FontAwesomeIcon className='text-4xl' icon={faLocation}></FontAwesomeIcon>
                        <h3 className='text-2xl font-semibold pb-1 pt-2'>15</h3>
                        <p className='font-semibold'>Showrooms</p>
                    </div>
                    <div className='rounded-lg mt-10 w-[250px] lg:w-[200px] xl:w-[250px] h-60 pt-16 text-orange-600 text-center bg-white mr-10'>
                        <FontAwesomeIcon className='text-4xl' icon={faAward}></FontAwesomeIcon>
                        <h3 className='text-2xl font-semibold pb-1 pt-2'>30</h3>
                        <p className='font-semibold'>Awards</p>
                    </div>
                </div>
            </div>

            <div className='py-20'>
                <div className='container mx-auto'>

                    <div className='grid md:grid-cols-2 items-center'>
                        <div>
                            <img src="https://i.ibb.co/RDqQCQH/saffron.png" alt="" />
                        </div>
                        <div className='px-5 text-center md:text-left py-12 md:py-0'>
                            <h1 className='text-3xl md:text-4xl uppercase font-semibold'>Top Spices of The <br />Month</h1>
                            <p className='py-3 font-semibold'>Top sell of this month. Total sell 1 Ton . Total Earning 2M USD. Saffron is the most valuable spices in the world.</p>
                            <button className='hover:bg-indigo-500 bg-orange-500 text-white py-3 px-6 rounded-full'><Link to='inventory'>Join Now</Link></button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;