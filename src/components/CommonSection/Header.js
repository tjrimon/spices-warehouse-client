import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='bg-indigo-500'>
            <div className='shadow-lg py-3 flex items-center justify-between container mx-auto'>
                <h1 className='text-2xl font-semibold text-white'>Spices Warehouse</h1>
                <ul className={`md:flex absolute md:static ${menuOpen ? 'top-14' : 'top-[-200px]'} bg-indigo-700 md:bg-indigo-500 text-white w-full md:w-auto p-5 md:p-0 left-0 duration-200 ease-in`}>
                    <li className='px-3 hover:bg-indigo-700 mr-2.5 md:text-white rounded py-2'><NavLink to='/'>Home</NavLink></li>
                    <li className='px-3 hover:bg-indigo-700 mr-2.5 md:text-white rounded py-2'><NavLink to='/inventory'>Manage Inventory</NavLink></li>
                    <li className='px-3 hover:bg-indigo-700 mr-2.5 md:text-white rounded py-2'><NavLink to='/login'>Login</NavLink></li>
                </ul>
                <div onClick={() => {
                    setMenuOpen(!menuOpen)
                }} className='md:hidden text-white'>
                    {menuOpen ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
                </div>
                {/* <div className='shadow-lg py-3 flex items-center justify-between container mx-auto'>
                <h1 className='text-2xl font-semibold text-white'>Spices Warehouse</h1>
                <ul className={`md:flex absolute md:static ${menuOpen ? 'top-14 w-full' : 'top-[-200px] w-full'} bg-indigo-700 md:bg-indigo-500 text-white p-5 md:p-0 left-0 duration-200 ease-in`}>
                    <li className='px-3 hover:bg-indigo-700 mr-2.5 md:text-white rounded py-2'><NavLink to='/'>Home</NavLink></li>
                    <li className='px-3 hover:bg-indigo-700 mr-2.5 md:text-white rounded py-2'><NavLink to='/inventory'>Manage Inventory</NavLink></li>
                    <li className='px-3 hover:bg-indigo-700 mr-2.5 md:text-white rounded py-2'><NavLink to='/login'>Login</NavLink></li>
                </ul>
                <div onClick={() => {
                    setMenuOpen(!menuOpen)
                }} className='md:hidden text-white'>
                    {menuOpen ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
                </div> */}
            </div>
        </div>
    );
};

export default Header;