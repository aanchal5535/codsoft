import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube,} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
 

  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-black bg-white'>
      <div className='cursor-pointer text-2xl'>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>JOBPORTAL</h1>
      </div>
      <ul className='hidden md:flex'>
   
   <li>
    <NavLink to='/' className='p-4 cursor-pointer text-lg' > Search Jobs</NavLink>
   </li>
   <li>
    <NavLink to='/blogs' className='p-4 cursor-pointer text-lg' > Pricing</NavLink>
   </li>
   <li>
    <NavLink to='/places' className='p-4 cursor-pointer text-lg' > Jobs List</NavLink>
   </li>
   <li>
    <NavLink to='/contact' className='p-4 cursor-pointer text-lg' >Salary estimate</NavLink>
   </li>
  
      </ul>
      <div className='flex gap-3'>
      <div className='hidden  gap-5 cursor-pointer md:flex'>
       <NavLink to='/signup' className='bg-blue text-white px-6 py-3 font-xl rounded-md sm:mb-0'>Signup</NavLink>
      </div>
      <div className='hidden  gap-5 cursor-pointer md:flex'>
       <NavLink to='/login' className='bg-blue text-white px-6 py-3 font-xl rounded-md sm:mb-0'>Login</NavLink>
      </div></div>

     
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>


      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1 className='text-2xl'>JOBPORTAL</h1>
          
   <li>
    <NavLink to='/' className='border-b' > Search Jobs</NavLink>
   </li>
   <li>
    <NavLink to='/blogs' className='border-b' > Jobs List</NavLink>
   </li>
   <li>
    <NavLink to='/places' className='border-b' > Salary estimate</NavLink>
   </li>
   <li>
    <NavLink to='/contact' className='border-b' >Pricing</NavLink>
   </li>
   <div className='flex items-center justify-center gap-5'>
   <li className='mt-2'>
       <NavLink to='/signup' className='bg-blue text-white px-2 py-1 font-xl rounded-md '>Signup</NavLink>
     </li>  
    <li className='mt-2'>
       <NavLink to='/login' className='bg-blue text-white px-2 py-1 font-xl rounded-md '>Login</NavLink>
     </li> 
     </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;