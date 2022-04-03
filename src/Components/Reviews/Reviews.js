import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../CustomerReviews/Review';

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <h1 className='text-center text-3xl underline font-bold'>All Reviews</h1>
      <div className='w-4/5 mx-auto grid gap-3 grid-cols-3 mt-8'>
        {
          reviews.map(elReview => <Review  key={elReview.id}elReview={elReview}></Review>)
        }
      </div>
    </div>
  );
};

export default Reviews;