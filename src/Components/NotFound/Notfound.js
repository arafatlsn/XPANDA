import React from 'react';
import { MdOutlineError } from 'react-icons/md'

const Notfound = () => {
  return (
    <div className='flex flex-col justify-center items-center' style={{height: '80vh'}}>
      <h1 className='flex items-center text-6xl text-red-500 font-mono'>404 Not Found <MdOutlineError className='ml-1'/></h1>
    </div>
  );
};

export default Notfound;