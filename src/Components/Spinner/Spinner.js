import React from 'react';
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='absolute inset-1/2'>
      <div class="lds-hourglass"></div>
    </div>
  );
};

export default Spinner;