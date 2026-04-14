import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Home = () => {
    return (
        <div className='bg-base-300'>
          <div className=' text-center space-y-4 pt-20'>
            <h1 className='text-[#244D3F] text-5 text-5xl font-semibold '>Friends to keep close in your life</h1>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white rounded-md mt-8'> <FaPlus /> Add a Friend</button>
          </div>
          <div className='container mx-auto grid grid-cols-4 justify-around'>
            <div className='bg-white text-center'>
                <h1>0</h1>
                <p>Total Friends</p>
            </div>
          </div>
        </div>
    );
};

export default Home;