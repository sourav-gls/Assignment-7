import React from 'react';

const SingleVideoCard = ({card}) => {
    return (
        <div className='w-3/5 mx-auto flex bg-white rounded-md gap-4 mb-4  p-4 items-center'>
                <div>
                     <img src="/assets/video.png" alt="" />
                </div>
                <div className='text-gray-500'>
                    <h1><span className='font-semibold text-[20px] text-black'>Video</span> with {card.name}</h1>
                    <h4>{new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}</h4>
                </div>
               
            </div>
    );
};

export default SingleVideoCard;