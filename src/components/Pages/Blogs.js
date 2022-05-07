import React from 'react';

const Blogs = () => {
    return (
        <div className='container grid md:grid-cols-2 lg:grid-cols-3 px-8 md:mx-0 gap-10 my-20'>

            <div className='shadow-xl pb-10 lg:w-[310px] xl:w-[400px]'>
                <img src="https://i.ibb.co/jkCvJpC/chili.png" alt="" />
                <div className="content p-5 text-center">
                    <h3 className='text-2xl font-semibold '>Ques</h3>
                    <p className='text-[17px] py-3'>description</p>
                </div>
            </div>

            <div className='shadow-xl pb-10 lg:w-[310px] xl:w-[400px]'>
                <img src="https://i.ibb.co/jkCvJpC/chili.png" alt="" />
                <div className="content p-5 text-center">
                    <h3 className='text-2xl font-semibold '>Ques</h3>
                    <p className='text-[17px] py-3'>description</p>
                </div>
            </div>

            <div className='shadow-xl pb-10 lg:w-[310px] xl:w-[400px]'>
                <img src="https://i.ibb.co/jkCvJpC/chili.png" alt="" />
                <div className="content p-5 text-center">
                    <h3 className='text-2xl font-semibold '>Ques</h3>
                    <p className='text-[17px] py-3'>description</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;