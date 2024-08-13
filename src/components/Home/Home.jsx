import React from 'react';
import cat1 from '../../assets/image/cat1.png'
import cat2 from '../../assets/image/cat2.png'
import circle from '../../assets/image/small circular 3.png'
import c1 from '../../assets/image/Mask group.png'
import c2 from '../../assets/image/Mask group (1).png'
import FeaturedPet from './FeaturedPet';
import FeaturedService from './FeaturedService';
import Popular from './Popular';
import Listing from './Listing';
import Health from './Health';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <div className='flex flex-col lg:flex-row mx-auto max-w-7xl mb-20 mt-10  gap-8 items-center'>
                <div className='flex-1 pl-12'>
                    <h1 className="text-4xl md:text-7xl font-bold">Established & Trusted Pet <br /> Care Service</h1>
                    <p className='mt-6 max-w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus amet molestiae ratione eaque. Deleniti impedit, mollitia ab</p>
                    <a className='btn rounded-3xl bg-[#FF5C2C] text-white font-bold px-10 mt-6'>
                        Find Now
                    </a>
                </div>
                <div className='flex-1 mb-24 md:mb-10'>
                    <div className='relative bg-[]'>
                        <img src={cat1} alt="" />
                        <div className='absolute top-96 right-2'>
                            <img src={cat2} alt="" />
                        </div>
                        <div className='absolute top-0 right-0'>
                            <img src={circle} alt="" />
                        </div>
                        <div className='absolute bottom-0 -left-32 rotate-180'>
                            <img src={circle} alt="" />
                        </div>
                        <div className='absolute rounded-md -bottom-36 md:-bottom-24 left-52 md:left-64 w-64 p-6 bg-white'>
                            <div className='flex gap-4'>
                                <img src={c1} alt="" />
                                <div>
                                    <h2 className='font-bold  text-black'>Cat Food</h2>
                                    <p>Lorem Ipsam</p>
                                </div>
                            </div>
                            <div className="divider divide-gray-950"></div>
                            <div className='flex gap-4 mt-4'>
                                <img src={c2} alt="" />
                                <div>
                                    <h2 className='font-bold text-black'>Cat Food</h2>
                                    <p>Lorem Ipsam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Pet */}
            <FeaturedPet></FeaturedPet>

            {/* Featured Service */}
            <FeaturedService></FeaturedService>

            {/* The Most Popular Breeds */}
            <Popular></Popular>

            {/* Listing */}
            <Listing></Listing>

            {/* Health and Wellness Services */}
            <Health></Health>
        </div>
    );
};

export default Home;