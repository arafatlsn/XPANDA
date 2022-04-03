import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../CustomerReviews/Review';

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  console.log(reviews)
  return (
    <div className='grid grid-cols-3'>
      {
        reviews.map(elReview => <Review  key={elReview.id}elReview={elReview}></Review>)
      }
    </div>
  );
};

export default Reviews;