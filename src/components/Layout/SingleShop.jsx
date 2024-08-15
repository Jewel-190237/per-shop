import React from 'react';
import homeIcon from '../../assets/image/homeIcon.png'
import pussyBanner from '../../assets/image/pussyCuteBanner.png'
const SingleShop = () => {
    return (
        <section>
            <div className='bg-[#61D5DF] h-60 w-full mb-20 mt-56 flex justify-between relative'>
                <div className='ml-4 md:ml-20 flex flex-col items-center justify-center'>
                    <h1 className='text-[#181818] font-bold text-3xl pl-5'>Our Shop</h1>
                    <div className='flex space-x-2'>
                        <img src={homeIcon} alt="" />
                        <p className='mt-3'>Home /<span className='text-[#FF5C2C]'> Shop</span></p>
                    </div>
                </div>
                <div className='absolute right-0 bottom-0'>
                    <img src={pussyBanner} alt="" className='w-64 md:w-full' />
                </div>
            </div>

            <div className='max-w-6xl mx-auto mt-32'>
                <div className='flex flex-col md:flex-row items-center'>

                </div>

            </div>
        </section>
    );
};

export default SingleShop;