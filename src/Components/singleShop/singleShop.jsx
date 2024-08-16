
import homeIcon from '../../assets/image/singleShop/homeIcon.png'
import sliderPicture from '../../assets/image/singleShop/SliderPictures.png'
import pussyBanner from '../../assets/image/singleShop/pussyCuteBanner.png'
import trainer from '../../assets/image/singleShop/trainer.png'


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


const singleShop = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
                <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-16'>
                    <div className='col-span-1 md:col-span-2'>

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
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>


                        </Swiper>
                        <Swiper
                            onClick={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderPicture} />
                            </SwiperSlide>
                        </Swiper>

                    </div>
                    <div className='shadow-xl p-6 rounded-lg'>
                        <div className='flex justify-between'>
                            <a className='font-bold text-black text-xl' href="">Basic</a>
                            <a className='font-bold text-black text-xl' href="">Standard</a>
                            <a className='font-bold text-black text-xl' href="">Premium</a>
                        </div>
                        <div className='flex justify-between mt-8'>
                            <p className='font-bold'>Startups Pack</p>
                            <p className='font-bold'>$30</p>
                        </div>
                        <div className='mt-8'>
                            <h4 className='font-bold '>Basic Training - Canine Good Citizen</h4>
                        </div>
                        <div className='mt-4'>
                            <ul >
                                <li> <input type="radio" name="a" id="" /> Basic Training - Canine Good Citizen</li>
                                <li> <input type="radio" name="a" id="" /> Basic Training - Advanced CGC</li>
                                <li> <input type="radio" name="a" id="" /> Basic Training - Urban CGC</li>
                            </ul>
                        </div>
                        <div className='text-center mt-8'>
                            <li className="btn mt-1 w-full rounded-3xl bg-[#FF5C2C] text-white font-bold"> Order Now</li>
                        </div>
                        <div className='text-center mt-8'>
                            <li className="btn mt-1 w-full bg-none rounded-3xl border border-[#FF5C2C] text-black font-bold"> Contact Trainer</li>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center mt-20'>
                    <h4 className='font-bold text-black font-xl mx-auto'>About This Services</h4>
                    <p className='mt-4 w-2/5 text-[#545B61] mx-auto text-center'>We are a reward-based training company that offers private in-home training, as well as, group classes at The Pooch Palace in the beautiful, Alabama town of Cullman. For more information about us, visit our website, NamasteDogTraining.com, or find us on Facebook, Instagram, Tik Tok, and Youtube! </p>

                    <h4 className='font-bold text-black font-xl mx-auto mt-8'>What I train</h4>

                    <div className='mt-8  mx-auto'>
                        <ul className='mx-auto' >
                            <li > <input type="radio" name="a" id="" /> Basic Training - Canine Good Citizen</li>
                            <li className='mt-3'> <input type="radio" name="a" id="" /> Basic Training - Advanced CGC</li>
                            <li className='mt-3'> <input type="radio" name="a" id="" /> Basic Training - Urban CGC</li>
                        </ul>
                    </div>

                    <h4 className='font-bold text-black font-xl mx-auto mt-8'>About This Trainer</h4>


                    <div className="relative indicator mx-auto mb-8">
                        <span className="absolute badge-primary rounded-full p-2 bottom-5 -right-2">top</span>
                        <div className="bg-base-300 grid h-32 w-32 place-items-center rounded-full"><img src={trainer} alt="" />
                        </div>
                    </div>
                    <h4 className='font-bold text-black font-xl mx-auto mt-8'>Namaste Dog Training</h4>

                    <h4 className='font-bold text-black font-xl mx-auto mt-4'> Trainer</h4>

                    <div className="rating rating-md mx-auto mt-4">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-7"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <p>5 (125 Reviews)</p>
                    </div>

                    <div className='mx-auto mt-4'>
                        <button className='btn btn-outline bg-blue-900 text-white rounded-3xl'>Contact me</button>
                    </div>

                    <div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus ">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default singleShop;