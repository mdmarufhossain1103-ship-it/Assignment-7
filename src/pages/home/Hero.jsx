import React from 'react';

const Hero = () => {
    return (
        <div className='bg-[#F8FAFC'>
            <div className='container mx-auto  mt-30'>
                <h2 className='text-center text-4xl font-bold'>Friends to keep close in your life</h2>
                <p className='text-center text-[#64748B] my-5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
                <div className='flex items-center justify-center'>
                    <button className='bg-[#244D3F] px-4 py-2 text-white mb-15'>+ Add a Friend</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;