import React from 'react';
import instragram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png'

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='max-w-[80%] mx-auto p-25 text-center'>
                <div>
                    <h2 className='text-6xl font-bold text-white mb-10'>KeenKeeper</h2>
                    <p className='text-[#FFFFFF] mb-2'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <p className='text-[#FFFFFF] mb-2'>Social Links</p>
                    <div className='flex items-center justify-center gap-3 mb-5'>
                        <img src={instragram} alt="Instragram image" />
                        <img src={facebook} alt="Facebook image" />
                        <img src={twitter} alt="Twitter image" />
                    </div>
                </div>
                <div className='text-[#FFFFFF] border-t mt-3 flex justify-between'>
                    <p className='mt-3'>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='mt-3 flex gap-5'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service </p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;