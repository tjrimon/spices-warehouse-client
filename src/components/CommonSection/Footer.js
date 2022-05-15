import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <div className='text-center px-5 text-white py-16 bg-[#161616]'>
                <h2 className='text-4xl font-semibold'>Spices Warehouse</h2>
                <p className='py-5'>Spices Warehouse is a inventory management website where you will find great spices and can store spices.<br /> Each spices can be beautifully stored. It's a very secure platform. Join with us.</p>
                <div>
                    <FontAwesomeIcon className='text-2xl mr-4' icon="fa-brands fa-facebook" />
                    <FontAwesomeIcon className='text-2xl mr-4' icon="fa-brands fa-twitter" />
                    <FontAwesomeIcon className='text-2xl mr-4' icon="fa-brands fa-youtube" />
                    <FontAwesomeIcon className='text-2xl mr-4' icon="fa-brands fa-linkedin" />
                    <FontAwesomeIcon className='text-2xl mr-4' icon="fa-brands fa-dribbble" />
                </div>
            </div>
            <div>
                <p className='text-white text-center bg-black py-4 px-5'>Copyright &copy;2022 All right resolves | Developed by TJ Rimon </p>
            </div>
        </div>
    );
};

export default Footer;