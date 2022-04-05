import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
const Review = ({elReview: {image, name, review, ratings}}) => {

  let rtngsStar;
  if(ratings === 5 ){
    rtngsStar = <div className='ratings-div flex ml-1'>
      <FaStar className='text-yellow-500'/>
      <FaStar className='text-yellow-500'/>
      <FaStar className='text-yellow-500'/>
      <FaStar className='text-yellow-500'/>
      <FaStar className='text-yellow-500'/>
    </div>
  }
  else if(ratings === 4 ){
    rtngsStar = <div className='ratings-div flex ml-1'>
      <FaStar className='text-yellow-500'/>
      <FaStar className='text-yellow-500'/>
      <FaStar className='text-yellow-500'/>
      <FaStar className='text-yellow-500'/>
    </div>
  }
  else if(ratings === 3 ){
    rtngsStar = <div className='ratings-div flex ml-1'>
      <FaStar className='text-yellow-500'/>
      <FaStar className='text-yellow-500'/>
      <FaStar className='text-yellow-500'/>
    </div>
  }
  else if(ratings === 2 ){
    rtngsStar = <div className='ratings-div flex ml-1'>
      <FaStar className='text-yellow-500'/>
      <FaStar className='text-yellow-500'/>
    </div>
  }
  else if(ratings === 1 ){
    rtngsStar = <div className='ratings-div flex ml-1'>
      <FaStar className='text-yellow-500'/>
    </div>
  }



  return (
    <div className='border px-2 py-1'>
      <div className='flex items-center'>
        <img className='object-cover' src={image} alt="" style={{width: '35px', height: '35px', borderRadius: '50%'}} />
        <div className='ml-3'>
          <h1 className='text-base font-bold'>{name}</h1>
          <h1 className='text-base font-bold flex items-center'>Ratings: {ratings}{ rtngsStar}</h1>
        </div>
      </div>
      <div className='mt-2'>
        {review}
      </div>
    </div>
  );
};

export default Review;