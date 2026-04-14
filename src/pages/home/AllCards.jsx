import React, { use } from 'react';
import { Link } from 'react-router';

const itemsPromise = fetch('/data.json').then(res=>res.json());

const AllCards = () => {
    const items = use(itemsPromise);
    // console.log(items);
    const statusColor = {
        'due soon': 'bg-[#EFAD44]',
        'overdue': 'bg-[#EF4444]',
        'on track': 'bg-[#244D3F]'
    }
    return (
        <div className='max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-30'>
            {
                items.map(item => {
                    return (
                        <Link to={`/details/${item.id}`} key={item.id} className='shadow-lg rounded-lg'>
                            <div className='flex flex-col justify-center items-center p-5'>
                                <img className='w-15 h-15 rounded-full' src={item.picture} alt={item.name} />
                                <h2 className='text-2xl font-bold mt-3'>{item.name}</h2>
                                <p className='text-[#64748B] mt-1'><small>{item.days_since_contact}d ago</small></p>
                                <div className='flex justify-between w-full mt-2 font-medium'>
                                    {
                                        item.tags.map((tag,index) => {
                                            return(
                                                <div key={index} className='bg-[#CBFADB] px-3 py-1 rounded-full'>
                                                    {tag}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className={`font-medium mt-2  text-white px-3 py-1 rounded-full ${statusColor[item.status]}`}>{item.status}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default AllCards;