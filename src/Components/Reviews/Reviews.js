import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../CustomerReviews/Review';
import Spinner from '../Spinner/Spinner';

const Reviews = () => {
  const [reviews, setReview, loading, setLoading] = useReviews();
  return (
    <>
    
      {
        loading ? <Spinner></Spinner> : <div className='pb-5'>
        <h1 className='text-center text-3xl underline font-bold'>All Reviews</h1>
        <div className='w-4/5 mx-auto grid gap-3 md:grid-cols-3 mt-8'>
          {
            reviews.map(elReview => <Review  key={elReview.id}elReview={elReview}></Review>)
          }
        </div>
      </div>
      }
    
    </>
  );
};

export default Reviews;