import React, { use, useContext } from 'react';
import { FaBoxArchive } from 'react-icons/fa6';
import { LuPhoneCall, LuVideo } from 'react-icons/lu';
import { MdAddAlert, MdOutlineTextsms } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useParams } from 'react-router';
import { CallCardContext } from '../../context/callCardContext';


const cardsPromise = fetch('/data.json').then(res => res.json());

const CardDetails = () => {


const cards = use(cardsPromise);

const { id } = useParams()
console.log(id)

const expectedCard = cards.find((card)=> card.id == id);
console.log(expectedCard)


const {callCards ,setCallCards ,textCards , setTextCards ,videoCards , setVideoCards} = useContext(CallCardContext)

const handleCallCard = () =>{
    setCallCards([...callCards , expectedCard])

}
const handleTextCard = () =>{
    setTextCards([...textCards , expectedCard])

}

const handleVideoCard = () =>{
    setVideoCards([...videoCards , expectedCard])

}




    return (
        <div className='bg-base-300  pt-15 pb-15'>
        <div className='sm:w-3/5 mx-auto grid grid-cols-3 grid-rows-6 sm:grid-cols-5 sm:grid-rows-3 gap-5 '>
            <div className=' bg-white text-center p-7 rounded-lg shadow-sm sm:col-span-2 col-span-3 row-span-2 flex flex-col justify-center  '>
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
                      </div >
                       <p className='mt-3 text-gray-500'>"{expectedCard.note}"</p>
                    <p className='text-gray-500 '>Preferred: {expectedCard.preferredContact}</p>
                    </div>
                    <div className='bg-white p-5 rounded-lg shadow-sm col-span-1 row-span-1 text-center flex flex-col justify-center space-y-2 '>
                        <h1 className='text-2xl font-semibold'>{expectedCard.lastContactDays}</h1>
                        <p className='text-gray-500 text-[16px]'> Since Contact</p>
                    </div>
                    <div className='bg-white p-5 rounded-lg shadow-sm col-span-1 row-span-1 text-center justify-center flex flex-col space-y-2'>
                        <h1 className='text-2xl font-semibold'>{expectedCard.goalDays}</h1>
                        <p className='text-gray-500 text-[16px]'>Goal (Days)</p>
                    </div>
                    <div className='bg-white p-5 rounded-lg shadow-sm col-span-1 row-span-1 text-center  flex flex-col justify-center space-y-2 '>
                        <h1 className='text-xl font-semibold'>{expectedCard.nextDue}</h1>
                        <p className='text-gray-500 text-[16px]'>Next Due</p>
                    </div>
                    <div className='col-span-3 row-span-1 sm:row-span-1 bg-white rounded-lg p-5 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h4 className='text-[20px]'>Relationship Goal</h4>
                            <button className='btn'>Edit</button>
                        </div>
                        <p className='text-gray-500'>Connect every <span className='font-semibold text-black'>{expectedCard.goalDays} days</span></p>
                    </div>
                    <div className=' col-span-3 sm:col-span-2 row-span-1 sm:row-span-1 flex justify-between flex-col '>
                        <div className='bg-white p-4 rounded-lg  font-semibold items-center justify-center    '> <span className='flex items-center justify-center gap-2'><MdAddAlert />  Snooze 2 weeks</span> </div>
                        <div className='bg-white p-4 rounded-lg text-center font-semibold'><span className='flex items-center justify-center gap-2'><FaBoxArchive />  Snooze 2 weeks</span></div>
                        <div className='bg-white p-4 rounded-lg text-center font-semibold text-red-500'><span className='flex items-center justify-center gap-2'><RiDeleteBin6Line /> Delete</span></div>
                        
                        
                        
                    </div>
                    <div className='bg-white col-span-3 row-span-1 p-8 rounded-lg sm:row-span-1'>
                        <h4 className='mb-5 text-[20px]'>Quick Check-In</h4>
                        <div className='grid grid-cols-3 gap-5 '>
                        <div className='bg-base-300 rounded-md pl-4 pr-4 pt-2 pb-2  items-center flex flex-col  ' onClick={handleCallCard}>
                            <LuPhoneCall className='text-3xl mb-1' />
                            <p>Call</p>
                        </div>
                        <div className='bg-base-300 rounded-md pl-4 pr-4 pt-2 pb-2 items-center flex flex-col' onClick={handleTextCard}>
                            <MdOutlineTextsms className='text-3xl mb-1' />
                            <p>Text</p>
                        </div>
                        <div className='bg-base-300 rounded-md pl-4 pr-4 pt-2 pb-2 items-center flex flex-col' onClick={handleVideoCard}>
                            <LuVideo className='text-3xl mb-1' />
                            <p>Video</p>
                        </div>
                        </div>
                    </div>
        </div>
        </div>
    );
};

export default CardDetails;