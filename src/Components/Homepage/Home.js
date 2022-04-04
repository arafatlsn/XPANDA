import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import Review from '../CustomerReviews/Review'

const Home = () => {
  const [reviews, setReviews] = useReviews()

  return (
    <div>
      <div className='md:w-4/5 lg:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2 md:p-0'>
        <div className='md:self-end justify-self-center md:mb-20 order-2'>
          <h1 className='md:text-6xl font-bold'>HD PRO</h1>
          <h1 className='md:text-6xl font-bold'>WEBCAM C920X</h1>
          <p className='text-lg font-semibold'>Full 1080p high definiton video</p>
          <p>Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction, Works with Skype, Zoom, FaceTime, Hangouts, PC/Mac/Laptop/Macbook/Tablet - Black</p>
          <button className='md:px-8 md:py-1 md:mt-5 font-bold text-xl rounded-lg' style={{backgroundColor: '#824EF9', color: 'white'}}>Buy Now</button>
        </div>
        <div className='order-1 md:order-2'>
          <img src="product_img.jpg" alt="" />
        </div>
      </div>
      <div className='mt-8'>
        <div>
          <h1 className='text-3xl font-bold text-center underline'>Customer Reviews</h1>
        </div>
        <div className='grid gap-5 grid-cols-1 md:grid-cols-3 w-4/5 mx-auto mt-10'>
          {
            reviews.length > 3 ? setReviews(reviews.slice(0, 3)) : ''
          }
          {
            reviews.map(elReview => <Review key={elReview.id}elReview={elReview}></Review>)
          }
        </div>
        <Link to={'/reviews'}>
          <div className='flex justify-center pt-7 pb-16'>
            <button className='px-10 py-1 text-xl font-bold rounded-lg' style={{backgroundColor: '#824EF9', color:'white'}}>See All Reviews</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;