import React from 'react';

const HeroCard = () => {
    return (
        <div className='max-w-[80%] mx-auto'>
            <div className=' grid grid-cols-2 md:grid-cols-4 gap-5 mb-15'>
                <div className='flex flex-col items-center justify-center p-[32px] shadow-xl rounded-2xl'>
                    <h2 className='font-bold'>10</h2>
                    <p className='text-[#64748B]'>Total Friends</p>
                </div>
                <div className='flex flex-col items-center justify-center p-[32px] shadow-xl rounded-2xl'>
                    <h2 className='font-bold'>3</h2>
                    <p className='text-[#64748B]'>On Track</p>
                </div>
                <div className='flex flex-col items-center justify-center p-[32px] shadow-xl rounded-2xl'>
                    <h2 className='font-bold'>6</h2>
                    <p className='text-[#64748B]'>Need Attention</p>
                </div>
                <div className='flex flex-col items-center justify-center p-[32px] shadow-xl rounded-2xl'>
                    <h2 className='font-bold'>12</h2>
                    <p className='text-[#64748B]'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;