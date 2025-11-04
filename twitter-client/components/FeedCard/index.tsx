import React from 'react';
import Image from 'next/image'

const FeedCard: React.FC = () => {
    return (
    <div className='border border-gray-600 border-r-0 border-l-0 border-b-0 p-5 hover:bg-slate-900 transition-all cursor-pointer'>
        <div className='grid grid-cols-12'>
            <div className='col-span-1'>
            <Image 
            className='rounded-full'
            src="https://avatars.githubusercontent.com/u/160838906?v=4" 
            alt="user-image" 
            height={50} 
            width={50}>
            </Image>
        </div>
            <div className='col-span-11 ml-3'>
                <h5>Samiksha Khare</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    </div>
    );
};
export default FeedCard