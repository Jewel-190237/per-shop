import React from 'react';
import homeIcon from '../../assets/image/singleShop/homeIcon.png'
import pussyBanner from '../../assets/image/singleShop/pussyCuteBanner.png'
import payment1 from '../../assets/image/myAccount/Payment-icon 4.png'
import payment2 from '../../assets/image/myAccount/Payment-icon 5.png'

const MyPaymentOption = () => {
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
            <div className='max-w-[1320] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-4 p-3 mt-32 rounded-lg '>
                    <div>
                        <h4 className='text-xl font-bold'>Hello, Leton Nondi</h4>
                        <a href="/manageAccount1"><h4 className='mt-8 text-xl font-bold'>Manage My Account</h4></a>
                        <div className='mt-8'>
                            <a href="/myProfile"><p className='mt-2 text-[#9da6b1]  font-bold'>My Profile</p></a>
                            <a href="/addressBook"><p className='mt-2 text-[#9da6b1] font-bold'>Address Book</p></a>
                            <a href="/myPaymentOption"><p className='mt-2 text-[#FF5C2C]  font-bold'>MY Payment Options </p></a>
                            <a href=""><p className='mt-2 text-[#9da6b1] font-bold'>Vouchers</p></a>
                        </div>
                        <h4 className='mt-8 text-xl font-bold'>My Orders</h4>
                        <div className='mt-8'>
                            <a href="/myReturn"><p className='mt-2 text-[#9da6b1] font-bold'>My Returns</p></a>
                            <a href="/myCancelation"><p className='mt-2 text-[#9da6b1] font-bold'>My Cancelation</p></a>
                        </div>
                        <a href="/myReview"><h4 className='mt-8 text-xl font-bold'>My Review</h4></a>
                        <h4 className='mt-8 text-xl font-bold'>Sell with us</h4>
                    </div>
                    <div className='col-span-3 mt-7'>
                        <div className='flex justify-between px-2 mb-2 text-[#FF5C2C]'>
                            <h4 className='font-bold text-xl'>My Payment Option</h4>
                            <h4 className='font-bold text-xl'>+ Add Payment Option</h4>
                        </div>
                        <div className='bg-[#FF5C2C33] px-4 py-8 rounded-lg '>
                            <h4 className='font-bold text-xl mb-8'>Account</h4>
                            <div className='flex justify-between mb-8 items-center'>
                                <div className='flex gap-4'>
                                    <img src={payment1} alt="" />
                                    <p className='mt-2 text-[#9da6b1] font-bold'>+ 1 235 4654 326</p>
                                </div>
                                <div className=''>
                                    <h4 className='font-bold'><span className='text-[#FF5C2C]'>Delete</span></h4>
                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-4'>
                                    <img src={payment2} alt="" />
                                    <p className='mt-2 text-[#9da6b1] font-bold'> + 1 235 4654 326</p>
                                </div>
                                <div className=''>
                                    <h4 className='font-bold'><span className='text-[#FF5C2C]'>Delete</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyPaymentOption;