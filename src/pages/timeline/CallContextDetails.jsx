import React, { useContext } from 'react';
import { CallContext } from '../../components/context/CallContext';
import { BiSolidPhoneCall } from 'react-icons/bi';

const CallContextDetails = () => {
    const { call, setCall } = useContext(CallContext);
    console.log(call, setCall);
    return (
        <div>
            {
                call.map(item =>{
                    return(
                        <div className='shadow-sm p-3 flex items-center gap-2 rounded-sm mb-5'>
                                <BiSolidPhoneCall />
                                <div>
                                <h2><span className='text-[#244D3F] font-medium'>Call</span><span className='text-[#64748B]'> with {item.name}</span></h2>
                                <p className='text-[#64748B]'>{item.callTime}</p>
                                </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CallContextDetails;