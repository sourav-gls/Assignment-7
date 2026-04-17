import React from 'react';

const SingleTextCard = ({card}) => {
    return (
        <div className='sm:w-3/5 w-4/5 mx-auto flex bg-white rounded-md gap-4 mb-4  p-4 items-center'>
                <div>
                     <img src="/assets/text.png" alt="" />
                </div>
                <div className='text-gray-500'>
                    <h1><span className='font-semibold text-[20px] text-black'>Text</span> with {card.name}</h1>
                    <h4>{new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}</h4>
                </div>
               
            </div>
    );
};

export default SingleTextCard;