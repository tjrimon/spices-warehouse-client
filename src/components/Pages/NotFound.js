import React from 'react';
import notFoundImage from '../../images/404.png'

const NotFound = () => {
    return (
        <div className='bg-[#FCF0F0] py-10'>
            <div className='container mx-auto'>
                <img className='mx-auto' src={notFoundImage} alt="" />
            </div>
        </div>
    );
};

export default NotFound;