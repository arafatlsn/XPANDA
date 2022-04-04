import React from 'react';
import { GiCoffeeCup } from 'react-icons/gi'

const About = () => {
  return (
    <div className='flex justify-center items-center' style={{height: '80vh'}}>
      <h1 className='flex text-3xl md:text-6xl font-bold font-mono'>This is About Page <GiCoffeeCup className='ml-1'/></h1>
    </div>
  );
};

export default About;