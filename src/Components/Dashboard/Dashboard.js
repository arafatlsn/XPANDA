import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';


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
      <h1 className='text-3xl font-bold underline text-center mb-8'>DashBoard</h1>
      <div className='grid lg:grid-cols-2 justify-items-center'>
        <div >
          <AreaChart
              width={800}
              height={500}
              data={chartData}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </div>
          <div>
              {/* <ResponsiveContainer width="100%" height="100%"> */}
                <LineChart
                  width={800}
                  height={500}
                  data={chartData}
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
          <div>
          <BarChart width={800} height={500} data={chartData}>
          <Bar dataKey="sell" fill="#8884d8" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
        </BarChart>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;