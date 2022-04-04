import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar, ComposedChart, Scatter, PieChart, Pie, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';


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
        <ComposedChart
          width={800}
          height={500}
          data={chartData}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="sell" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="sell" stroke="#ff7300" />
        </ComposedChart>
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
        <div>
          <RadarChart width={800}
          height={600} cx="50%" cy="50%" outerRadius="80%" data={chartData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="month" />
            <PolarRadiusAxis />
            <Radar name="sell" dataKey="sell" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </div>
        </div>
    </div>
  );
};

export default Dashboard;