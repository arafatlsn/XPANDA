import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar, ComposedChart, Scatter, PieChart, Pie, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import './Dashboard.css'


const Dashboard = () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setChartData(data))
  }, [])
  return (
    <div className='pb-5'>
      <h1 className='text-3xl font-bold underline text-center mb-8'>DashBoard</h1>
      <div className='grid lg:grid-cols-2 justify-items-center'>
        <div className='mb-10'>
          <h1 className='text-3xl font-bold text-center mb-3 underline'>Invest vs Revenue</h1>
          <div className='chart-div'>
            <ResponsiveContainer>
              <ComposedChart
                width={500}
                height={400}
                data={chartData}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="month" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
              </ComposedChart>
            </ResponsiveContainer>
           </div>
          </div>
          <div className='mb-10'>
            <h1 className='text-3xl font-bold text-center underline mb-3'>Month wise Sell</h1>
            <div className='chart-div'>
              <ResponsiveContainer>
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
              </ResponsiveContainer>
            </div>
          </div>
          <div className='mb-10'>
            <h1 className='text-3xl font-bold text-center underline mb-3'>Month wise Sell</h1>
              <div className='chart-div'>
                <ResponsiveContainer>
                <BarChart width={800} height={500} data={chartData}>
                  <Bar dataKey="sell" fill="#8884d8" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                </BarChart>
                </ResponsiveContainer>
              </div>
        </div>
        <div>
          <h1 className='text-3xl font-bold text-center underline'>Invest vs Revenue</h1>
          <div className='chart-div'>
            <ResponsiveContainer>
              <RadarChart width={800}
              height={600} cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="month" />
                <PolarRadiusAxis />
                <Radar name="investment" dataKey="investment" stroke="#ff7300" fill="#ff7300" fillOpacity={0.6} />
                <Radar name="revenue" dataKey="revenue" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
          </ResponsiveContainer>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Dashboard;