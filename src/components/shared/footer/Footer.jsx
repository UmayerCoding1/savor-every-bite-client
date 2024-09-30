import React from 'react';
import { footerLogo } from '../../../provider/imageProvider';
import { Link } from 'react-router-dom';
import { CopyRight } from '../../../provider/iconProvider';

const Footer = () => {
    return (
         <footer className='mt-20 bg-gray-300 rounded-lg text-black p-5 '>
           <div className=' grid grid-cols-2 lg:grid-cols-4 gap-4 '>
            <div>
                <img className='w-16 rounded-full' src={footerLogo} alt="" />
                <p className='text-lg text-[#9F8272] font-bold'>Savor Every Bite</p>
            </div>
            <div>
                <h2 className='text-2xl text-[#DEB64E] font-bold mb-3'>Address</h2>
                <p>Bohodarhat,Chottogram</p>
                <p>Bangladesh</p>
            </div>
            <div>
                <h2 className='text-2xl text-[#DEB64E] font-bold mb-3'>Details</h2>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About Us</Link></li>
                  <li><Link to='/contact'>Contact Us</Link></li>
                  <li><Link to='/blog'>Blog</Link></li>
            </div>

            <div>
                <h2 className='text-2xl text-[#DEB64E] font-bold mb-3'>Contact Us</h2>
                <p>+8801864055582</p>
                <p>umayer.dev@gmail.com</p>
            </div>
            
            {/* <div >
                <form action="">
                    <input className='bg-white outline-none p-2' type="email" name="" id="" placeholder='Email'/>
                    <textarea name="" id=""></textarea>
                    <input type="submit" value="" />
                </form>
            </div> */}
           </div>
           <p className='flex items-center text-xs text-gray-500'><CopyRight/>CopyRight, Create by Umayer Hossain 2024!</p>
         </footer>
    );
};

export default Footer;