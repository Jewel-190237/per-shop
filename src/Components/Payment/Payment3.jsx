import React from 'react';
import homeIcon from '../../assets/image/payment/homeIcon.png'
import pussyBanner from '../../assets/image/payment/pussyCuteBanner.png'
import chatIcon from '../../assets/image/payment/chatIcon.png'
import person from '../../assets/image/payment/chatPerson.png'
import callIcon from '../../assets/image/payment/Call btn.png'

const Payment3 = () => {
    return (
        <section>
            <div className='bg-[#61D5DF] h-60 w-full mb-20 mt-56 flex justify-between relative'>
                <div className='ml-4 md:ml-20 flex flex-col items-center justify-center'>
                    <h1 className='text-[#181818] font-bold text-3xl pl-5'>Chat</h1>
                    <div className='flex space-x-2'>
                        <img src={homeIcon} alt="" />
                        <p className='mt-3'>Home /<span className='text-[#FF5C2C]'> Shop</span></p>
                    </div>
                </div>
                <div className='absolute right-0 bottom-0'>
                    <img src={pussyBanner} alt="" className='w-64 md:w-full' />
                </div>
            </div>

            <div className='max-w-[1320px]'>
                <div className='grid grid-cols-1 md:grid-cols-3 bg-[#FFFFFF] shadow shadow-[#0000004D] rounded-xl p-4 mt-32 gap-16'>
                    <div className=''>
                        <div className='flex gap-4 items-center'>
                            <img src={chatIcon} alt="" />
                            <h4 className='font-bold text-xl'>All Conversion</h4>
                        </div>
                        <div className='flex justify-between mt-16 items-center'>
                            <div className='flex items-center gap-6'>
                                <img src={person} alt="" />
                                <div>
                                    <p>Shopons World</p>
                                    <p className='text-[#938683]'>Bangladesh</p>
                                </div>
                            </div>
                            <div>
                                <p>3/10</p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-8 items-center bg-[#FF5C2C1A] p-3 rounded-lg'>
                            <div className='flex items-center gap-6'>
                                <img src={person} alt="" />
                                <div>
                                    <p>Shopons World</p>
                                    <p className='text-[#938683]'>Bangladesh</p>
                                </div>
                            </div>
                            <div>
                                <p>3/10</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-6'>
                                <img src={person} alt="" />
                                <div>
                                    <p>Shopons World</p>
                                    <p className='text-[#938683]'>Bangladesh</p>
                                </div>
                            </div>
                            <div>
                                <img src={callIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Payment3;