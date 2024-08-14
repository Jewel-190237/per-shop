import React from 'react';
import cutePussy from '../../assets/image/cute-puppy.png'
import cardCat from '../../assets/image/cardCat.png'
const BathService = () => {
    return (
        <section>
            <div className='relative bg-[rgb(97,213,223)] w-full mt-40 md:mt-80 rounded-lg'>
                <h3 className='font-bold text-2xl pt-8 md:pt-10 w-3/5 text-center mx-auto'>Our Bully Mall dog sellers  lists puppies from AKC registered litters so you can choose a breeder with confidence </h3>
                <p className='text-center mx-auto text-[#545B61]'>I’m Looking for</p>

                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <div className='flex-1'>
                        <div className='flex justify-stretch items-center'>
                            <div className=''>
                                <select className='w-full md:w-44 lg:w-72 p-3 mr-0 md:mr-3 rounded-md m-3' value='lllll' name="Brand" id="ppp"> Pe
                                    <option value="a">Brand</option>
                                    <option value="a">b</option>
                                    <option value="a">c</option>
                                </select>
                            </div>
                            <div className=''>
                                <select className='w-full md:w-36 lg:w-52 p-3 rounded-md mr-0 md:mr-3 ml-8' name="" id="">
                                    <option value="a">Male</option>
                                    <option value="a">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='flex justify-stretch items-center'>
                            <div className=''>
                                <select className='w-full md:w-44 lg:w-72 p-3 mr-0 md:mr-3 rounded-md m-3' value='lllll' name="Brand" id="ppp"> Pe
                                    <option value="a">Brand</option>
                                    <option value="a">b</option>
                                    <option value="a">c</option>
                                </select>
                            </div>
                            <div className=''>
                                <select className='w-full md:w-36 lg:w-52 p-3 rounded-md mr-0 md:mr-3 ml-8' name="" id="">
                                    <option value="a">Male</option>
                                    <option value="a">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <li className=" outline-none btn mt-1 mb-4 rounded-3xl bg-[#FF5C2C] text-white font-bold text-center"> Find Pussy</li>
                </div>
                <div className='absolute -top-28 md:-top-72 lg:-top-72 left-20 lg:left-96 '>
                    <img className='w-1/2 md:w-4/5' src={cutePussy} alt="" />
                </div>
            </div>
        </section>
    );
};

export default BathService;