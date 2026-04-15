import React, { use, useContext} from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { BsChatLeftText } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { IoArchive } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { Link, useParams } from 'react-router';
import { CallContext } from '../../components/context/CallContext';
import callImg from '../../assets/call.png';
import textImg from '../../assets/text.png';
import videoImg from '../../assets/video.png';

const itemsPromise = fetch('/data.json').then(res => res.json());

const Details = () => {
    const items = use(itemsPromise);
    // console.log(items);
    const {itemId} = useParams ();
    // console.log(itemId);
    const expectedItem = items.find((item) => item.id === Number(itemId))
    // console.log(expectedItem);

    const statusColor = {
        'due soon': 'bg-[#EFAD44]',
        'overdue': 'bg-[#EF4444]',
        'on track': 'bg-[#244D3F]'
    }

    // const [call,setCall] = useState([]);
    const {call,setCall} = useContext(CallContext);
    const {text,setText} = useContext(CallContext);
    const {video,setVideo} = useContext(CallContext);

    const handleCall = () =>{
        alert("Call is seleted");
        const now = new Date ();
        const month = now.toLocaleString('en-US', {month: 'long'});
        const time = now.toLocaleTimeString();
        const newCall = {
            ...expectedItem,
            callTime: `${month} - ${time}`
        }
        // setCall ([...call,expectedItem])
        setCall ([...call,newCall]);
    }

    const handleText = () =>{
        alert("Text is seleted");
        const now = new Date ();
        const month = now.toLocaleString('en-US', {month: 'long'});
        const time = now.toLocaleTimeString();
        const newCall = {
            ...expectedItem,
            textTime: `${month} - ${time}`
        }
        // setCall ([...call,expectedItem])
        setText ([...text,newCall]);
    }

    const handleVideo = () =>{
        alert("Video is seleted");
        const now = new Date ();
        const month = now.toLocaleString('en-US', {month: 'long'});
        const time = now.toLocaleTimeString();
        const newCall = {
            ...expectedItem,
            videoTime: `${month} - ${time}`
        }
        // setCall ([...call,expectedItem])
        setVideo ([...video,newCall]);
    }
   
    // console.log(call,"Call");

    return (
            <div className='max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 my-30 gap-40'>
                <div>
                    <div className='flex flex-col items-center justify-center shadow-sm p-5 rounded-lg'>
                        <img className='w-15 h-15 rounded-full' src={expectedItem.picture} alt={expectedItem.name} />
                        <h2 className='text-2xl font-bold mt-3'>{expectedItem.name}</h2>
                        <p className={`font-medium mt-2  text-white px-3 py-1 rounded-full ${statusColor[expectedItem.status]}`}>{expectedItem.status}</p>
                        <div className='flex justify-between w-full mt-2 font-medium'>
                            {
                                expectedItem.tags.map((tag, index) => {
                                    return (
                                        <div key={index} className='bg-[#CBFADB] px-3 py-1 rounded-full'>
                                            {tag}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <p className='text-[#64748B] mt-2'>{expectedItem.bio}</p>
                        <p className='text-[#64748B]'>Preferred: email</p>
                    </div>
                    <div className='mt-5'>
                        <p className='flex gap-2 items-center shadow-sm rounded-lg p-2 justify-center'><IoIosNotifications /> Snooze 2 weeks</p>
                    </div>
                    <div className='mt-5'>
                        <p className='flex gap-2 items-center shadow-sm rounded-lg p-2 justify-center'><IoArchive /> Archive</p>
                    </div>
                    <div className='mt-5'>
                        <p className='flex gap-2 items-center shadow-sm rounded-lg p-2 justify-center text-red-500'><MdDelete /> Delete</p>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-3 gap-5 mb-20'>
                        <div className='shadow-sm rounded-lg p-3 text-center md:whitespace-nowrap'>
                            <p className='font-bold'>{expectedItem.days_since_contact}</p>
                            <p className='text-[#64748B]'>Days Since Contact</p>
                        </div>
                        <div className='shadow-sm rounded-lg p-3 text-center whitespace-nowrap'>
                            <p className='font-bold'>{expectedItem.goal}</p>
                            <p className='text-[#64748B]'>Goal (Days)</p>
                        </div>
                        <div className='shadow-sm rounded-lg p-3 text-center whitespace-nowrap'>
                            <p className='font-bold'>{expectedItem.next_due_date}</p>
                            <p className='text-[#64748B]'>Next Due</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center shadow-sm rounded-lg p-3 mb-20'>
                        <div>
                            <h2 className='font-bold mb-7'>Relationship Goal</h2>
                            <p>Connect every <span className='font-bold'>{expectedItem.goal} days</span></p>
                        </div>
                        <div>
                            <button className='btn'>Edit</button>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-[#64748B] font-bold mb-5'>Quick Check-In</h2>
                        <div className='grid grid-cols-3 gap-5'>
                        <button onClick={() => handleCall()} className='btn px-3 py-7 text-[#64748B] flex flex-col items-center'><img src={callImg} className='w-5' alt="Call image" />Call</button>
                        <button onClick={() => handleText()} className='btn px-3 py-7 text-[#64748B] flex flex-col items-center'><img src={textImg} className='w-5' alt="Text image" />Text</button>
                        <button onClick={() => handleVideo()} className='btn px-3 py-7 text-[#64748B] flex flex-col items-center'><img src={videoImg} className='w-5' alt="Video image" />Video</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Details;