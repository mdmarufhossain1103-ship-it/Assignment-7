import React, { useContext } from 'react';
import { TextContext } from '../../components/context/TextContext';
import textIcon from '../../assets/text.png'

const TextContextDetails = () => {
     const { text } = useContext(TextContext);
    //  console.log(text, setText);
     return (
         <div>
             {
                 text.map(item =>{
                     return(
                         <div key={item.id} className='shadow-sm p-3 flex items-center gap-2 rounded-sm mb-5'>
                             <img src={textIcon} className='w-7' alt="Text image" />
                                 <div>
                                 <h2><span className='text-[#244D3F] font-medium'>Text</span><span className='text-[#64748B]'> with {item.name}</span></h2>
                                 <p className='text-[#64748B]'>{item.textTime}</p>
                                 </div>
                         </div>
                     )
                 })
             }
         </div>
     );
};

export default TextContextDetails;