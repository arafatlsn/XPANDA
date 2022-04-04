import React from 'react';
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='absolute md:static md:flex justify-center items-center' style={{top: '50%',  left: '39%', height: '80vh'}}>
      <div class="lds-hourglass"></div>
    </div>
  );
};

export default Spinner;