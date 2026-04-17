import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='text-white container mx-auto text-center space-y-2 pt-10 pb-10 border-b border-gray-600'>
                <h1 className='text-6xl  font-semibold'>KeenKeeper</h1>
                <p className='text-[16px] text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div>
                    <p className='mt-4'>Social Links</p>
                    <div className='flex items-center justify-center gap-5 mt-4'>
                         <div className='w-7 h-7 bg-white rounded-full text-black flex justify-center items-center'><FaInstagram /></div>
                         <div className='w-7 h-7 bg-white rounded-full text-black flex justify-center items-center'><FaFacebookF /></div>
                         <div className='w-7 h-7 bg-white rounded-full text-black flex justify-center items-center'><BsTwitterX /></div>
                    </div>
                </div>
            </div>
            <div className='sm:flex text-center sm:text-start justify-between container mx-auto text-gray-400 items-center pt-10 pb-10 border-t-gray-400 '>
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <div className='flex gap-4 sm:gap-10 items-center justify-center sm:justify-start'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;