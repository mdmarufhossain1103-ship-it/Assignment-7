import React, { useState } from 'react';
import CallContextDetails from './CallContextDetails';
import TextContextDetails from './TextContextDetails';
import VideoContextDetails from './VideoContextDetails';



const Timeline = () => {
    const [filter, setFilter] = useState('Filter timeline')
    return (
        <div className='max-w-[80%] mx-auto my-20'>
            <div>
                <h2 className='text-3xl font-bold mb-3'>Timeline </h2>
                <select value={filter} onChange={(e) => setFilter(e.target.value)} defaultValue="Pick a color" className="select">
                    <option disabled={true}>Filter timeline</option>
                    <option value="All">Show All</option>
                    <option value='Call'>Call</option>
                    <option value='Text'>Text</option>
                    <option value='Video'>Video</option>
                </select>
                <div className='mt-5'>
                    {(filter === 'All' || filter === 'Call') && <CallContextDetails></CallContextDetails>}
                    {(filter === 'All' || filter === 'Text') && <TextContextDetails></TextContextDetails>}
                    {(filter === 'All' || filter === 'Video') && <VideoContextDetails></VideoContextDetails>}
                </div>
            </div>
        </div>
    );
};

export default Timeline;