import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/image/petLogo.png'
import cart from '../../assets/image/Cart.png'
import watchIcon from '../../assets/image/watchIcon.png'
import user from '../../assets/image/user.png'


const Header = () => {
  const navLinks = <>
    <li> <NavLink to='/'>Home</NavLink> </li>
    <li> <NavLink to='/pets'>Pet</NavLink> </li>
    <li> <NavLink to='/services'>Service</NavLink> </li>
    <li> <NavLink to='/products'>Products</NavLink> </li>
    <li className='outline outline-[#FF5C2C] outline-1 rounded-sm'> <NavLink to='/'><span className='text-[#FF5C2C]'>become a seller</span></NavLink> </li>
  </>

  const navLinks1 = <>
    <li> <NavLink to='/'>Home</NavLink> </li>
    <li> <NavLink to='/pets'>Pet</NavLink> </li>
    <li> <NavLink to='/services'>Service</NavLink> </li>
    <li> <NavLink to='/products'>Products</NavLink> </li>
    <li className='outline outline-[#FF5C2C] outline-1 rounded-sm'> <NavLink to='/'><span className='text-[#FF5C2C]'>become a seller</span></NavLink> </li>
    <li className='btn mt-1'><img src={cart} alt="" />Curt</li>
    <li className="btn mt-1"> <img src={user} alt="" /> login/register</li>
    <li className="btn mt-1 rounded-3xl bg-[#FF5C2C] text-white font-bold"> <img src={watchIcon} alt="" /> how it works</li>
  </>
  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {
              navLinks1
            }
          </ul>
        </div>
        <a className="text-xl"> <img className='w-1/2' src={logo} alt="logo" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navLinks
          }
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <a ><img className='mr-6' src={cart} alt="" /></a>
        <a className="btn rounded-3xl text-[#C9C3C1] "> <img src={user} alt="" /> login/register</a>
        <a className="btn rounded-3xl bg-[#FF5C2C] text-white font-bold"> <img src={watchIcon} alt="" /> how it works</a>
      </div>
    </div>
  );
};

export default Header;