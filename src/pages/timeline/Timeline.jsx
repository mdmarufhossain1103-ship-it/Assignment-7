import React from 'react';
import CallContextDetails from './CallContextDetails';



const Timeline = () => {
    return (
            <div className='max-w-[80%] mx-auto my-20'>
                <div>
                    <h2 className='text-3xl font-bold mb-3'>Timeline </h2>
                    <select defaultValue="Pick a color" className="select">
                        <option disabled={true}>Filter timeline</option>
                        <option>Call</option>
                        <option>Text</option>
                        <option>Video</option>
                    </select>
                    <div className='mt-5'>
                        <CallContextDetails></CallContextDetails>
                    </div>
                </div>
            </div>
    );
};

export default Timeline;