import React, { use } from 'react';
import { useParams } from 'react-router';


const cardsPromise = fetch('/data.json').then(res => res.json());

const CardDetails = () => {


const cards = use(cardsPromise);

const { id } = useParams()
console.log(id)

const expectedCard = cards.find((card)=> card.id == id);
console.log(expectedCard)

    return (
        <div className='w-3/5 mx-auto'>
            <div className='w-65 bg-white text-center p-7 rounded-lg shadow-sm '>
                      <div className='flex justify-center'>
                      <img src={expectedCard.avatar} alt="" className='w-20 h-20 rounded-full mb-3' />
                      </div>
                      <h3 className='text-[22px] font-semibold'>{expectedCard.name}</h3>
                      
                      <div className='flex flex-col gap-3 justify-center items-center mt-3'>
                      
                      <div className ={`badge font-semibold rounded-full
                          ${expectedCard.status === "Overdue" &&
                           "badge-error"}
                           ${expectedCard.status === "Almost Due" &&
                           "badge-warning"}
                           ${expectedCard.status === "On-Track" &&
                           "badge-success"}`}>{expectedCard.status}
                       </div>
                       <div className="badge badge-soft badge-success font-semibold rounded-full">{expectedCard.category}</div>
                      </div>
                       <p>"{expectedCard.note}"</p>
                    <p>Preferred: {expectedCard.preferredContact}</p>
                    </div>
                    <div className='bg-white p-5 rounded-lg shadow-sm '>
                        <h1>{expectedCard.lastContactDays}</h1>
                        <p>Days Since Contact</p>
                    </div>
                    <div className='bg-white p-5 rounded-lg shadow-sm '>
                        <h1>{expectedCard.lastContactDays}</h1>
                        <p>Days Since Contact</p>
                    </div>
                    <div className='bg-white p-5 rounded-lg shadow-sm '>
                        <h1>{expectedCard.lastContactDays}</h1>
                        <p>Days Since Contact</p>
                    </div>
                    <div>
                        <div>
                            <h4></h4>
                            <button></button>
                        </div>
                        <p></p>
                    </div>
                    <div>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <div>
                        <h4></h4>
                        <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        </div>
                    </div>
        </div>
    );
};

export default CardDetails;