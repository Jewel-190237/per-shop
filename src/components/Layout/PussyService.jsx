import React from 'react';
import cutePussy from '../../assets/image/cute-puppy.png'
import cardCat from '../../assets/image/cardCat.png'
import expDog from '../../assets/image/expDog.png'
import expDog2 from '../../assets/image/dog2.png'
import expDog3 from '../../assets/image/dog3.png'

const PussyService = () => {
    return (
        <section className='max-w-6xl mx-auto bg-none'>
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

            <div>
                <div className='text-center md:mt-20'>
                    <h3 className='text-2xl font-extrabold mb-2 text-black'>Puppy Services</h3>
                    <p className='max-w-lg mx-auto'>Designed so animals can relax & indulge in pet stylists, run around our exercise yards, make new friends in doggy daycare, or simply spend hours in our dog.</p>
                </div>
                <p className='mt-10 font-bold mb-4'>Showing 1-9 of 846 results</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                    <figure className='relative'>
                        <img src={cardCat} />
                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                    </figure>
                    <div className="card-body mb-0 pb-0">
                        <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                        <p className=''>Meal/Female available 15 weeks old</p>
                    </div>
                    <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                        <br />
                    </div>
                    <div className='card-body'>
                        <p>664522 Spring Creek Montrose, <br />
                            CO 8542</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                    <figure className='relative'>
                        <img src={cardCat} />
                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                    </figure>
                    <div className="card-body mb-0 pb-0">
                        <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                        <p className=''>Meal/Female available 15 weeks old</p>
                    </div>
                    <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                        <br />
                    </div>
                    <div className='card-body'>
                        <p>664522 Spring Creek Montrose, <br />
                            CO 8542</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                    <figure className='relative'>
                        <img src={cardCat} />
                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                    </figure>
                    <div className="card-body mb-0 pb-0">
                        <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                        <p className=''>Meal/Female available 15 weeks old</p>
                    </div>
                    <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                        <br />
                    </div>
                    <div className='card-body'>
                        <p>664522 Spring Creek Montrose, <br />
                            CO 8542</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                    <figure className='relative'>
                        <img src={cardCat} />
                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                    </figure>
                    <div className="card-body mb-0 pb-0">
                        <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                        <p className=''>Meal/Female available 15 weeks old</p>
                    </div>
                    <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                        <br />
                    </div>
                    <div className='card-body'>
                        <p>664522 Spring Creek Montrose, <br />
                            CO 8542</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                    <figure className='relative'>
                        <img src={cardCat} />
                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                    </figure>
                    <div className="card-body mb-0 pb-0">
                        <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                        <p className=''>Meal/Female available 15 weeks old</p>
                    </div>
                    <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                        <br />
                    </div>
                    <div className='card-body'>
                        <p>664522 Spring Creek Montrose, <br />
                            CO 8542</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                    <figure className='relative'>
                        <img src={cardCat} />
                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                    </figure>
                    <div className="card-body mb-0 pb-0">
                        <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                        <p className=''>Meal/Female available 15 weeks old</p>
                    </div>
                    <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                        <br />
                    </div>
                    <div className='card-body'>
                        <p>664522 Spring Creek Montrose, <br />
                            CO 8542</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                    <figure className='relative'>
                        <img src={cardCat} />
                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                    </figure>
                    <div className="card-body mb-0 pb-0">
                        <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                        <p className=''>Meal/Female available 15 weeks old</p>
                    </div>
                    <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                        <br />
                    </div>
                    <div className='card-body'>
                        <p>664522 Spring Creek Montrose, <br />
                            CO 8542</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                    <figure className='relative'>
                        <img src={cardCat} />
                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                    </figure>
                    <div className="card-body mb-0 pb-0">
                        <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                        <p className=''>Meal/Female available 15 weeks old</p>
                    </div>
                    <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                        <br />
                    </div>
                    <div className='card-body'>
                        <p>664522 Spring Creek Montrose, <br />
                            CO 8542</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-2xl mb-4">
                    <figure className='relative'>
                        <img src={cardCat} />
                        <p className='bg-[#E5734F] text-white font-bold absolute top-3 left-10 md:top-4 md:left-4 p-1 rounded-md'> $ 225</p>
                    </figure>
                    <div className="card-body mb-0 pb-0">
                        <h2 className="card-title text-2xl font-extrabold">American Water Spaniel</h2>
                        <p className=''>Meal/Female available 15 weeks old</p>
                    </div>
                    <div className="w-11/12 mx-auto h-0.5 bg-slate-600">
                        <br />
                    </div>
                    <div className='card-body'>
                        <p>664522 Spring Creek Montrose, <br />
                            CO 8542</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 className='font-extrabold text-2xl pt-8 md:pt-10'>Explore other Breeds</h3>
                <p className=' text-[#545B61]'>I’m Looking for</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-80 gap-20 mb-8'>
                <div className='relative flex flex-col mb-60 md:mb-60 lg:mb-0'>
                    <div className='absolute bottom-0'>
                        <div className='bg-[#FF5C2C] w-60 rounded-full'>
                            <img className='w-60 p-3' src={expDog} alt="" />
                        </div>
                        <p className='font-bold text-center mt-3'>Airedale Terrier1</p>
                    </div>
                </div>
                <div className='relative flex flex-col mb-60 md:mb-60 lg:mb-0'>
                    <div className='absolute bottom-0'>
                        <div className='bg-[#61D5DF] w-60 rounded-full'>
                            <img className='w-60 p-6' src={expDog2} alt="" />
                        </div>
                        <p className='font-bold text-center mt-3'>Airedale Terrier2</p>
                    </div>
                </div>
                <div className='relative flex flex-col mb-60 md:mb-0 lg:mb-0'>
                    <div className='absolute bottom-0'>
                        <div className='bg-[#F9A6AC] w-60 rounded-full'>
                            <img className='w-60 p-6' src={expDog3} alt="" />
                        </div>
                        <p className='font-bold text-center mt-3'>Airedale Terrier3</p>
                    </div>
                </div>
                <div className='relative flex flex-col'>
                    <div className='absolute bottom-0'>
                        <div className='bg-[#FFA58A] w-60 rounded-full'>
                            <img className='w-60 p-3' src={expDog} alt="" />
                        </div>
                        <p className='font-bold text-center mt-3'>Airedale Terrier4</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default PussyService;