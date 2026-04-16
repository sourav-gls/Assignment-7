import React, { useContext } from 'react';
import { CallCardContext } from '../../context/callCardContext';
import SingleCallCard from './singleCallCard';
import SingleTextCard from './SingleTextCard';
import SingleVideoCard from './SingleVideoCard';



const TimeLine = () => {

     const {callCards, textCards , videoCards } = useContext(CallCardContext) ;
     console.log(callCards );
    return (
    <div className='bg-base-300 pt-15 pb-5'>
        <div className='w-3/5 mx-auto '>
        <h1 className='text-[35px] font-bold '>Timeline</h1>
        <button className='mt-4 mb-4' > filter</button>
        </div>
        
         {
        callCards.map( (card , ind) =>{
            return (<SingleCallCard card={card} key={ind}></SingleCallCard>)
          
        })}  
        {
            textCards.map((card ,ind) =>{
                return(<SingleTextCard card={card} key={ind}></SingleTextCard>)
            })
        }
        {
            videoCards.map ((card , ind) =>{
                return (<SingleVideoCard card={card} key={ind}></SingleVideoCard>)
            })
        }
     
    </div>
    );
};

export default TimeLine;