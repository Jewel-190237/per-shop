import React from 'react';
import homeIcon from '../../assets/image/homeIcon.png'
import pussyBanner from '../../assets/image/pussyCuteBanner.png'

const Contact = () => {
    return (
        <section>
            <div className='bg-[#61D5DF] h-60 w-full mb-20 mt-44 flex justify-between relative'>
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
                <div className='flex justify-center gap-10'>
                    <div className='flex-1 bg-[#FFFFFF] p-8 rounded-lg'>
                        <h4 className='text-[#FE4651] font-bold'>Contact Us</h4>
                        <h2 className='text-black font-extrabold text-2xl'>Sent a Message</h2>
                        <p className='text-[#938683] mt-4'>Please do not hesitate to send us a message, We are looking forward to hearing from you! We reply within 24 hours.</p>

                        <input type="text" placeholder="First Name" className="input border-b-2 border-[#ACB5BD] w-full border-x-0  border-y-0 mt-3" />
                        <input type="text" placeholder="Last Name" className="input border-b-2 border-[#ACB5BD] w-full border-x-0  border-y-0 mt-6" />
                        <input type="email" placeholder="Email" className="input border-b-2 border-[#ACB5BD] w-full border-x-0  border-y-0 mt-6" />
                        <input type="number" placeholder="Phone" className="input border-b-2 border-[#ACB5BD] w-full border-x-0  border-y-0 mt-6" />
                        <input type="text" placeholder="Subject" className="input border-b-2 border-[#ACB5BD] w-full border-x-0  border-y-0 mt-6" />
                        <input type="text" placeholder="Write Your Message" className="input border-b-2 border-[#ACB5BD] w-full h-32 border-x-0 border-y-0 mt-6" />

                        <div className='text-center'>
                            <button className=" btn outline-none mt-6 mb-4 w-3/5  rounded-3xl bg-[#FF5C2C] text-white font-bold text-center"> Submit </button>
                        </div>
                    </div>
                    <div className='flex-1'>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;