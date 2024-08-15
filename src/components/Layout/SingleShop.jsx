import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import homeIcon from '../../assets/image/homeIcon.png';
import pussyBanner from '../../assets/image/pussyCuteBanner.png';
import './styles.css';

const SingleShop = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section>
            <div className='bg-[#61D5DF] h-60 w-full mb-20 mt-56 flex justify-between relative'>
                <div className='ml-4 md:ml-20 flex flex-col items-center justify-center'>
                    <h1 className='text-[#181818] font-bold text-3xl pl-5'>Our Shop</h1>
                    <div className='flex space-x-2'>
                        <img src={homeIcon} alt="Home Icon" />
                        <p className='mt-3'>Home /<span className='text-[#FF5C2C]'> Shop</span></p>
                    </div>
                </div>
                <div className='absolute right-0 bottom-0'>
                    <img src={pussyBanner} alt="Banner" className='w-64 md:w-full' />
                </div>
            </div>

            <div className='max-w-6xl mx-auto mt-32'>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='flex-1'>
                        {/* Main Swiper with Thumbs */}
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : {}}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            {/* Main Swiper Slides */}
                            {Array.from({ length: 10 }).map((_, index) => (
                                <SwiperSlide key={index}>
                                    <img src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`} alt={`Nature ${index + 1}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Thumbnail Swiper */}
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            {/* Thumbnail Swiper Slides */}
                            {Array.from({ length: 10 }).map((_, index) => (
                                <SwiperSlide key={index}>
                                    <img src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`} alt={`Nature ${index + 1}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='flex-1'>
                        llll
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleShop;
