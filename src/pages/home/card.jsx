import React from 'react';

const Card = ({card}) => {
    return (
        <div className='w-65 bg-white text-center p-7 rounded-lg shadow-sm '>
                      <div className='flex justify-center'>
                      <img src={card.avatar} alt="" className='w-20 h-20 rounded-full mb-3' />
                      </div>
                      <h3 className='text-[22px] font-semibold'>{card.name}</h3>
                      <p className='text-[16px] text-gray-400'>{card.lastContactDays}d ago</p>
                      <div className='flex flex-col gap-3 justify-center items-center mt-3'>
                      <div className="badge badge-soft badge-success font-semibold rounded-full">{card.category}</div>
                      <div className ={`badge font-semibold rounded-full
                          ${card.status === "Overdue" &&
                           "badge-error"}
                           ${card.status === "Almost Due" &&
                           "badge-warning"}
                           ${card.status === "On-Track" &&
                           "badge-success"}`}>{card.status}
                           </div>
                      </div>
                    </div>
    );
};

export default Card;