import React from 'react';
import homeIcon from '../../assets/image/payment/homeIcon.png'
import pussyBanner from '../../assets/image/payment/pussyCuteBanner.png'
import card from '../../assets/image/payment/Group.png'
import productImage from '../../assets/image/payment/productImage.png'
import lock from '../../assets/image/payment/lock 1.png'
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <section >
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
            <div className='max-w-[1320px] '>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-7 mb-60 mt-40'>
                    <div className='col-span-2 p-3 '>
                        <label className=" w-full mt-4">
                            <div className='w-full p-7 rounded-xl border-2 border-[#FF5C2C] h-20 '>
                                Payment Option
                            </div>
                        </label>
                        <div className="rating mt-8 flex items-center gap-7 ml-6">
                            <input type="radio" name="radio" className="radio bg-[#d83706] rounded-full border-2 border-[#d83706] " defaultChecked />
                            <p className='text-black font-bold'>Credit and Debit Cards</p>
                            <img src={card} alt="" />
                        </div>
                        <div className='w-full p-3 rounded-xl border-2 border-[#FF5C2C] h-full'>
                            <div className='flex justify-between gap-4'>
                                <div className="flex-1 w-full">
                                    <label > Card Number
                                        <input className='w-full p-3 rounded-xl border-2 input border-[#FF5C2C]' type="number" required />
                                    </label>
                                </div>
                                <div className='flex gap-4 justify-between'>
                                    <label className="form-control w-full"> Security Code
                                        <input className='w-full p-3 rounded-xl border-2 input border-[#FF5C2C]' type="number" required />
                                    </label>
                                    <label className="form-control w-full"> Expire Date
                                        <input className='w-full p-3 rounded-xl border-2 input border-[#FF5C2C]' type="date" required />
                                    </label>
                                </div>
                            </div>
                            <div className='flex justify-between gap-4 mt-10'>
                                <div className=" w-full">
                                    <label> First Name
                                        <input className='w-full rounded-xl border-2 input border-[#FF5C2C]' type="text" required />
                                    </label>
                                </div>
                                <div className="w-full">
                                    <label> Last Name
                                        <input className='w-full rounded-xl border-2 input border-[#FF5C2C]' type="text" required />
                                    </label>

                                </div>
                            </div>

                            <div className="gap-0 w-32">
                                <label className="cursor-pointer label">
                                    <input type="checkbox" defaultChecked className="checkbox checkbox-success " />
                                    <span className="label-text">Remember me</span>
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className='p-3'>
                        <div className='flex gap-4 rounded-lg bg-[#FF5C2C] items-center'>
                            <img src={productImage} alt="" />
                            <h4 className='text-white font-bold'>Lorem ipsum dolor sit amet,
                                elit, sed do eiusmod tempor
                                t dolore magna aliqua. Ut e</h4>
                        </div>
                        <div className='flex justify-between mt-8 font-bold px-4'>
                            <p className=''>Silver</p>
                            <p className=''>$60</p>
                        </div>
                        <p className='mt-8 font-bold px-4'>Enter Promo Code</p>
                        <div className='flex justify-between mt-8 font-bold px-4'>
                            <p className=''>Silver Fee</p>
                            <p className=''>$20</p>
                        </div>
                        <div className='flex justify-between mt-8 font-bold px-4'>
                            <p className=''>Total</p>
                            <p className=''>$80</p>
                        </div>
                        <div className='mx-auto text-center mt-8'>
                            <button className=' btn bg-[#FF5C2C] text-white font-bold rounded-3xl px-10 text-xl'>Confirm Pay</button>
                        </div>
                        <div className='flex justify-center mt-4 items-center'>
                            <img src={lock} alt="" />
                            <p className='text-[#938683]'>SSL Secure Payment</p>
                        </div>
                    </div>
                </div>
                <div className='flex p-6 justify-between'>
                    <button disabled className=' btn bg-[#FF5C2C] text-white font-bold rounded-3xl '>previous</button>
                    <Link to='/payment2'><button className=' btn bg-[#FF5C2C] text-white font-bold rounded-3xl '>Next</button></Link>
                </div>

            </div>
        </section>
    );
};

export default Payment;