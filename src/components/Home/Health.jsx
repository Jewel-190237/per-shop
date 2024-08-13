import React from 'react';
import eat from '../../assets/image/eat.png'
import paly from '../../assets/image/play.png'
import bath from '../../assets/image/bath.png'
import sleep from '../../assets/image/sleep.png'
import fwd from '../../assets/image/fwd.png'
import eff1 from '../../assets/image/eff1.png'
import eff2 from '../../assets/image/eff2.png'

const Health = () => {
    return (
        <section className='max-w-6xl mx-auto mt-10'>
            <div className='flex justify-center md:justify-end gap-8 font-bold mr-10'>
                <a className='text-[#61D5DF]' href=""><u>For Dog</u></a>
                <a href="">For Cat</a>
                <a href="">For Other</a>
            </div>
            <div className='flex flex-col md:flex-row justify-center mb-40 md:mb-20'>
                <div className='flex-1'>
                    <h3 className='text-2xl font-bold mt-4 mb-4 md:mb-4 text-black text-center md:text-start'>Health and Wellness Services</h3>
                    <div className='flex gap-8 justify-center md:justify-start'>
                        <div className='flex gap-2 items-center'>
                            <img src={eat} alt="" />
                            <p className='font-bold'>Eat</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={paly} alt="" />
                            <p className='font-bold'>Play</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={bath} alt="" />
                            <p className='font-bold'>Bath</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={sleep} alt="" />
                            <p className='font-bold'>Sleep</p>
                        </div>
                    </div>
                    <p className='mt-8 w-full md:max-w-96 text-center md:text-start'>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog grooming salon.</p>
                    <li className="btn mt-8 rounded-3xl bg-[#FF5C2C] text-white font-bold p-4 ml-40 md:ml-0">Book Appointment </li>

                </div>
                <div className='flex-1 relative'>
                    <div className='absolute left-20 md:left-14 top-16 md:-bottom-48 rounded-3xl w-4/6 md:w-5/6 h-24 md:h-48 bg-[#F9A6AC]'>
                        <br />
                    </div>
                    <img className='absolute top-4 md:-bottom-32 left-36 md:left-28 w-2/5 md:w-2/3' src={fwd} alt="" />
                    <img className='absolute hidden md:flex -top-1 -right-14' src={eff1} alt="" />
                            <img className='absolute hidden md:flex top-52 -left-4 rotate-180' src={eff2} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Health;