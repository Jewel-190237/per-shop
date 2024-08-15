import React from 'react';
import vector from '../../assets/image/Vector.png'
import vector1 from '../../assets/image/Vector (1).png'
import vector2 from '../../assets/image/instagram.png'
import vector3 from '../../assets/image/Vector (3).png'
import logo from '../../assets/image/petLogo.png'
import logoFooter from '../../assets/image/logoFooter.png'


const Footer = () => {
    return (
        <div className=' bg-[#260E07]'>
            <div className='pt-10 max-w-6xl mx-auto'>
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <div className='flex mb-10 lg:mb-1 md:mb-5'>
                        <a href=""><img className='mr-7' src={vector} alt="" /></a>
                        <a href=""><img className='mr-7' src={vector1} alt="" /></a>
                        <a href=""><img className='mr-7' src={vector2} alt="" /></a>
                        <a href=""><img className='mr-7' src={vector3} alt="" /></a>
                    </div>
                    <div className='mb-10 lg:mb-1 md:mb-5'>
                        <img className='w-3/4' src={logoFooter} alt="" />
                    </div>
                    <div className='mb-10 lg:mb-1 md:mb-5'>
                        <div>
                            Lets update yourself
                        </div>
                        <div className='flex'>
                            <input
                                type="text"
                                placeholder="Email"
                                class="input input-bordered bg-white rounded-3xl input-md w-full max-w-xs mr-4" />

                            <a className='btn rounded-3xl bg-[#FF5C2C] text-white font-bold px-10'>
                                Subscribe
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className='pt-10 max-w-6xl mx-auto'>
                {/* <div className='flex items-center w-full'> */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center xl:gap-[150px] gap-10'>
                    <div className='mb-10 lg:mb-1 md:mb-5'>
                        <a className='text-xl font-bold' href=""> Service</a>
                        <div className='flex flex-col mt-3'>
                            <a href="">Find Puppy  </a>
                            <a href="">Find Groomer</a>
                            <a href="">Find Trainer</a>
                        </div>
                    </div>
                    <div className='mb-10 lg:mb-1 md:mb-5'>
                        <a className='text-xl font-bold' href=""> Service</a>
                        <div className='flex flex-col mt-3'>
                            <a href="">Find Puppy  </a>
                            <a href="">Find Groomer</a>
                            <a href="">Find Trainer</a>
                        </div>
                    </div>
                    <div className='mb-10 lg:mb-1 md:mb-5'>
                        <a className='text-xl font-bold' href=""> Service</a>
                        <div className='flex flex-col mt-3'>
                            <a href="">Find Puppy  </a>
                            <a href="">Find Groomer</a>
                            <a href="">Find Trainer</a>
                        </div>
                    </div>
                    <div className='mb-10 lg:mb-1 md:mb-5'>
                        <a className='text-xl font-bold' href=""> Polices & Support</a>
                        <div className='flex flex-col mt-3'>
                            <a href="">Find Puppy  </a>
        
                            <a href="/singleShop">Single Shop</a>
                            <a href="/contact">Contact</a>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                <div className="divider divide-white"></div>
                <footer className="footer footer-center text-base-content pb-6">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                    </aside>
                </footer>
            </div>

        </div>
    );
};

export default Footer;