import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import Loading from './Loading';
const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/";

    // if (googleLoading || githubLoading) {
    //     return <Loading></Loading>
    // }

    if (googleError || githubError) {
        errorElement = <p className='text-danger'>Error: {googleError?.message} {githubError?.message}</p>
    }

    if (googleUser || githubUser) {
        navigate(from, { replace: true });
    }
    return (
        <div className='px-5'>
            <button className='w-full rounded-lg bg-black text-white  py-3 mt-5 font-semibold' type='submit' onClick={() => signInWithGithub()} ><FontAwesomeIcon className='text-lg' icon="fa-brands fa-github" /> Github</button>
            <button onClick={() => signInWithGoogle()} className='w-full  rounded-lg bg-[#E34133] text-white py-3 mt-5 font-semibold' type='submit' ><FontAwesomeIcon className='text-lg' icon="fa-brands fa-google" /> Google</button>
            {errorElement}
        </div>
    );
};

export default SocialLogin;