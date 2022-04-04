import React from 'react';
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center' style={{height: '80vh'}}>
      <div class="lds-hourglass"></div>
    </div>
  );
};

export default Spinner;