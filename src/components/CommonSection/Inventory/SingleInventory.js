import { faCircleDollarToSlot, faCircleUser, faClipboardCheck, faDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { Link } from 'react-router-dom';

const SingleInventory = ({ items }) => {
    const { description, img, name, price, quantity, supplierName } = items
    return (
        <div className='shadow-xl pb-10 lg:w-[310px] xl:w-[400px]'>
            <img src={img} alt="" />
            <div className="content p-5 text-center">
                <h3 className='text-2xl font-semibold '>{name}</h3>
                <p className='text-[17px] py-3'>{description}</p>
                <div className='flex justify-between items-center font-semibold'>
                    <p><FontAwesomeIcon className='text-orange-600 text-lg' icon={faClipboardCheck} /> {quantity}<span className='text-sm font-bold'> /ton</span></p>
                    <p><FontAwesomeIcon className='text-orange-600 text-lg' icon={faCircleUser}></FontAwesomeIcon> {supplierName}</p>
                    <p><FontAwesomeIcon className='text-orange-600 text-lg' icon={faDollar}></FontAwesomeIcon> {price}<span className='text-sm font-bold'> /ton</span></p>
                </div>
                <button className='hover:bg-indigo-500 bg-orange-500 text-white mt-10 py-3 px-6 rounded-full mx-auto block'><Link to='inventory'>Manage Stock</Link></button>
            </div>
        </div>
    );
};

export default SingleInventory;