import React from 'react';
import featureCat from '../../assets/image/Featurecat.png'
import effect from '../../assets/image/Highlight Effect Line 3.png'

const Listing = () => {
    return (
        <section className='max-w-6xl mx-auto mt-0 md:mt-10'>
            <div>
                <div className='text-center mb-8 md:mb-40'>
                    <h3 className='text-2xl font-bold mb-2 text-black'>Listing With Us</h3>
                    <p className='max-w-lg mx-auto'>List your services or products and connect with new customers <br /> around the world</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='flex-1'>
                        <div className='text-center'>
                            <h3 className='text-2xl font-bold mb-2 text-black'>Groomers</h3>
                            <p className='max-w-72 mx-auto'>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog.</p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='relative mt-36 md:mt-0'>
                            <div className='absolute left-32 md:left-0 bottom-0 md:-bottom-48 rounded-md w-1/2 md:w-full h-20 md:h-48 bg-[#F9A6AC]'>
                                <br />
                            </div>
                            <img className='absolute bottom-0 md:-bottom-48 left-52 md:left-20 w-1/6 md:w-2/4' src={featureCat} alt="" />
                            <img className='absolute hidden md:flex -top-24 left-72' src={effect} alt="" />
                            <img className='absolute hidden md:flex top-24 -left-28 rotate-180' src={effect} alt="" />
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='text-center'>
                            <h3 className='text-2xl font-bold mb-2 text-black'>Groomers</h3>
                            <p className='max-w-72 mx-auto'>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-center mt-8 md:mt-20'>
                        <h3 className='text-2xl font-bold mb-2 text-black'>Groomers</h3>
                        <p className='max-w-72 mx-auto'>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Listing;