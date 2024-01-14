
import axios from 'axios';

import { useEffect } from 'react';
import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,  } from 'recharts';




const Statistics = () => {

  const[Statistics, setStatistics]  = useState([])

useEffect(() => {
  
axios.get('https://openapi.programming-hero.com/api/quiz')
.then(data => {
  const StatisticData =data.data.data;
  const statisticsWithFakeData = StatisticData.map(statistic =>{
   
    const obj = {
      name : statistic.name,
      total: statistic.total,
    }
    return obj;
  })
  console.log(statisticsWithFakeData);
  setStatistics(statisticsWithFakeData)

});


},[])

  return (
    <div>

      <h2 className="text-5x1">Question:{Statistics.length}</h2>
      
      <AreaChart
      width={500}
      height={400}
      data={Statistics}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>

    </div>
  );
};

export default Statistics;



