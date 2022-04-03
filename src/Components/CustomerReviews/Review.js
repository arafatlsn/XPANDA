import React from 'react';

const Review = ({elReview: {image, name, review, ratings}}) => {
  return (
    <div className='border px-2 py-1'>
      <div className='flex items-center'>
        <img className='' src={image} alt="" style={{width: '35px', height: '35px', borderRadius: '50%'}} />
        <div className='ml-3'>
          <h1 className='text-base font-bold'>{name}</h1>
          <h1 className='text-base font-bold'>Ratings: {ratings}</h1>
        </div>
      </div>
      <div className='mt-2'>
        {review}
      </div>
    </div>
  );
};

export default Review;