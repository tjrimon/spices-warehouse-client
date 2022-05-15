import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { faBars, faClose, faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='bg-indigo-500'>
            <div className='shadow-lg py-3 md:px-0 px-5 flex items-center justify-between container mx-auto'>
                <h1 className='text-2xl font-semibold text-white'><Link to="/">Spices Warehouse</Link></h1>
                <ul className={`main-menu md:flex absolute md:static ${menuOpen ? 'top-14' : 'top-[-290px]'} bg-indigo-700 md:bg-indigo-500 text-white w-full md:w-auto p-5 md:p-0 left-0 duration-200 ease-in`}>
                    <li className='px-3 hover:bg-indigo-700 mr-2.5 md:text-white rounded py-2'><NavLink to='/'>Home</NavLink></li>
                    <li className='px-3 hover:bg-indigo-700 mr-2.5 md:text-white rounded py-2'><NavLink to='/inventory'>All Spices</NavLink></li>
                    <li className='px-3 hover:bg-indigo-700 mr-2.5 md:text-white rounded py-2'><NavLink to='/blogs'>Blogs</NavLink></li>
                    {user ? <li className='px-3 hover:bg-indigo-700 mr-2.5 md:text-white rounded py-2'><NavLink to='/myinventory'>My Items</NavLink></li> : ''}
                    {user ? <li className='px-3 hover:bg-indigo-700 mr-2.5 md:text-white rounded py-2'><NavLink to='/addinventory'>Add Items</NavLink></li> : ''}
                    <li className='px-3 hover:bg-indigo-700 mr-2.5 md:text-white rounded py-2'>
                        {user ?
                            <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}><FontAwesomeIcon icon={faSignOut} /> sign out</button>
                            : <><FontAwesomeIcon icon={faSignIn} /> <NavLink className='pl-1' to='/login'>Login</NavLink> </>
                        }
                    </li>

                </ul>
                <div onClick={() => {
                    setMenuOpen(!menuOpen)
                }} className='md:hidden text-white'>
                    {menuOpen ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
                </div>
            </div>
        </div >
    );
};

export default Header;