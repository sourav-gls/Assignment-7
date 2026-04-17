import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { CallCardContext } from '../../context/callCardContext';


const Stats = () => {

     const {callCards, textCards , videoCards } = useContext(CallCardContext) ;

    const data = [
  { name: 'Call', value: callCards.length, fill: '#0088FE' },
  { name: 'Text', value: textCards.length, fill: '#00C49F' },
  { name: 'Video', value: videoCards.length, fill: '#FFBB28' },
  
];

return(
    <div className='bg-base-300 pt-15 pb-15'>
      <h1 className='text-center font-semibold text-3xl mb-3'>Friendship Analytics</h1>
    <div className='w-3/5 mx-auto item center justify-center flex bg-white rounded-3xl pt-5 pb-5 '>
    
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
    <Legend/>
    <Tooltip/>
    </PieChart>
    </div>
    </div>
)
        
    
};

export default Stats;