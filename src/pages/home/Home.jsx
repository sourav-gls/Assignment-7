import React, { use } from 'react';
import { FaPlus } from 'react-icons/fa';
import Card from './card';

const cardsPromise = fetch('/data.json').then(res => res.json());



const Home = () => {

const cards = use(cardsPromise);
console.log(cards)





    return (
        <div className='bg-base-300 pb-20'>
          <div className=' text-center space-y-4 pt-20'>
            <h1 className='text-[#244D3F] text-5 text-5xl font-semibold '>Friends to keep close in your life</h1>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white rounded-md mt-8'> <FaPlus /> Add a Friend</button>
          </div >
          <div className='w-3/4 mx-auto grid grid-cols-4 mt-10 gap-8 '>
            <div className='bg-white text-center w-65 rounded-lg p-8'>
                <h1 className='text-[30px] font-semibold text-[#244D3F]'>0</h1>
                <p className='text-gray-500'>Total Friends</p>
            </div>
            <div className='bg-white text-center w-65 rounded-lg p-8'>
                <h1 className='text-[30px] font-semibold text-[#244D3F]'>0</h1>
                <p className='text-gray-500'>On Track</p>
            </div>
            <div className='bg-white text-center w-65 rounded-lg p-8'>
                <h1 className='text-[30px] font-semibold text-[#244D3F]'>0</h1>
                <p className='text-gray-500'>Need Attention</p>
            </div>
            <div className='bg-white text-center w-65 rounded-lg p-8'>
                <h1 className='text-[30px] font-semibold text-[#244D3F]'>0</h1>
                <p className='text-gray-500'>Interactions This Month</p>
            </div>
            
          </div>
          <hr className='w-3/4 mx-auto border-gray-300 mt-10 mb-10'/>
          <div className='w-3/4 mx-auto  mt-10'>
            <h1 className='text-[25px]  font-semibold mb-10'>Your Friends</h1>
            <div className='grid grid-cols-4 gap-8 '>
                {
                  cards.map((card) => {
                    return(
                    <Card  card={card}/>
                    )
                  })
                }
            </div>
          </div>
        </div>
    );
};

export default Home;