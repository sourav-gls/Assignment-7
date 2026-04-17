import React, { useContext } from 'react';
import { CallCardContext } from '../../context/callCardContext';
import SingleCallCard from './singleCallCard';
import SingleTextCard from './SingleTextCard';
import SingleVideoCard from './SingleVideoCard';
import { BiSolidError } from 'react-icons/bi';



const TimeLine = () => {

     const {callCards, textCards , videoCards } = useContext(CallCardContext) ;
     console.log(callCards );

     const total = callCards.length + textCards.length + videoCards.length ;
    return (
    <div className='bg-base-300 pt-15 pb-5'>
        <div className='sm:w-3/5 w-4/5 mx-auto '>
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
        {!total ? <h1 className='text-3xl font-semibold w-3/5 mx-auto text-center mb-10 mt-5'>No Interactions Yet!</h1> : <div></div>}
     
    </div>
    );
};

export default TimeLine;