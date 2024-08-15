import homeIcon from '../../../assets/image/homeIcon.png'
import pussyBanner from '../../../assets/image/pussyCuteBanner.png'


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const SingleShop = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState('0');

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
                    <div className='flex-1'>

                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </SwiperSlide>
                        </Swiper>

                    </div>
                    <div className='flex-1'>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default SingleShop;