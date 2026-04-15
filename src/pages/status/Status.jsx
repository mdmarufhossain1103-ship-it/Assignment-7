import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { CallContext } from '../../components/context/CallContext';
import { TextContext } from '../../components/context/TextContext';
import { VideoContext } from '../../components/context/VideoContext';

const Status = () => {
    const { call } = useContext(CallContext);
    const { text } = useContext(TextContext);
    const { video } = useContext(VideoContext);
    const data =[
        { name: "Text", value: text.length, fill: '#7E35E1'},
        { name: "Call", value: call.length, fill: '#244D3F'},
        { name: "Video", value: video.length, fill: '#37A163'}
    ]
    return (
        <div className='my-20 max-w-[80%] mx-auto'>
            <h2 className='text-5xl font-bold'>Friendship Analytics</h2>
            <div className='mt-15 shadow-xl p-5'>
                <h2 className='text-[#244D3F] font-medium text-xl'>By Interaction Type</h2>
                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 , margin: 'auto'}} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Legend iconType='circle'></Legend>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>
    );
};

export default Status;