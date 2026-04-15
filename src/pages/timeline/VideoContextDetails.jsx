import React, { useContext } from 'react';
import { VideoContext } from '../../components/context/VideoContext';
import videoIcon from '../../assets/video.png';

const VideoContextDetails = () => {
     const { video } = useContext(VideoContext);
        //  console.log(video, setVideo);
         return (
             <div>
                 {
                     video.map(item =>{
                         return(
                             <div key={item.id} className='shadow-sm p-3 flex items-center gap-2 rounded-sm mb-5'>
                                 <img src={videoIcon} className='w-7' alt="Video image" />
                                     <div>
                                     <h2><span className='text-[#244D3F] font-medium'>Video</span><span className='text-[#64748B]'> with {item.name}</span></h2>
                                     <p className='text-[#64748B]'>{item.videoTime}</p>
                                     </div>
                             </div>
                         )
                     })
                 }
             </div>
         );
};

export default VideoContextDetails;