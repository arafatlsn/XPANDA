import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setChartData(data))
  }, [])
  console.log(chartData)
  return (
    <div>
      
      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <LineChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        {/* </ResponsiveContainer> */}

    </div>
  );
};

export default Dashboard;