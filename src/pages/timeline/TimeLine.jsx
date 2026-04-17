import React, { useContext } from 'react';
import { CallCardContext } from '../../context/callCardContext';
import SingleCallCard from './singleCallCard';
import SingleTextCard from './SingleTextCard';
import SingleVideoCard from './SingleVideoCard';
import { BiSolidError } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';
import { TiFilter } from 'react-icons/ti';



const TimeLine = () => {

     const {callCards, textCards , videoCards } = useContext(CallCardContext) ;
     console.log(callCards );

     const total = callCards.length + textCards.length + videoCards.length ;
    
    return (
    <div className='bg-base-300 pt-15 pb-5'>
        <div className='sm:w-3/5 w-4/5 mx-auto '>
        <h1 className='text-[35px] font-bold '>Timeline</h1>
        <div>
            <button className="btn rounded-lg" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
  <TiFilter /> Filter
</button>

<ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  <li><a>Call</a></li>
  <li><a>Text </a></li>
   <li><a>Video </a></li>
</ul>
        </div>
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