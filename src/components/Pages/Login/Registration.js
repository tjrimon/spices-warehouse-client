import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../Login/SocialLogin';
import auth from '../../../firebase.init';
import Loading from './Loading';


const Registration = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }




    return (
        <div>
            <div>
                <div className='py-20 md:flex justify-center items-center'>
                    <div>
                        <form onSubmit={handleRegister} className='w-[20rem] md:ml-auto mx-auto md:w-96 bg-gray-200 py-10 px-10 rounded-lg'>
                            <h1 className='pb-3 font-semibold text-xl '>Registration Here</h1>
                            <div className="">
                                <label htmlFor="name" className='text-sm font-semibold'>Name</label>
                                <input className='block border-gray-300 rounded-lg mt-1 mb-3 w-full focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2.5' name='name' type="text" id='name' placeholder='Enter your Name' />
                            </div>
                            <div className="">
                                <label htmlFor="email" className=' text-sm font-semibold'>Email</label>
                                <input name='email' required className='block border-gray-300 rounded-lg mt-1 mb-3 w-full focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2.5' type="email" id='email' placeholder='Enter your email' />
                            </div>
                            <div className="">                         <label htmlFor="password" className='text-sm font-semibold'>Password</label>
                                <input type="password" name='password' required className=' block border-gray-300 rounded-lg mt-1 mb-3 w-full px-4 py-2.5' id='password' placeholder='Enter your password' />
                            </div>
                            {/* <p className='text-red-500'>{signUpError}</p>
                        <p className='text-green-500'>{signUpSuccess}</p> */}
                            <button className='w-full rounded-lg bg-indigo-600 text-white py-3 mt-5 text-sm font-semibold' type='submit'>Sign up</button>
                            <p className='pt-7'> Already Registered ? <span className='text-indigo-700 font-semibold'><Link to='/login'>Login</Link></span></p>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;