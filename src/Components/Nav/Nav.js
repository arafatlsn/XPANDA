import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
  return (
    <div className='navigation-div flex items-center justify-between p-5'>
      <div className='flex items-center'>
        <img src="panda_logo.png" alt="" />
        <h1 className='text-4xl font-bold'>X-Panda</h1>
      </div>
      <div className='mr-20'>
        <Link className='text-xl font-bold mx-2' to={'/home'}>Home</Link>
        <Link className='text-xl font-bold mx-2' to={'/reviews'}>Reviews</Link>
        <Link className='text-xl font-bold mx-2' to={'/dashboard'}>Dashboard</Link>
        <Link className='text-xl font-bold mx-2' to={'/blogs'}>Blogs</Link>
        <Link className='text-xl font-bold mx-2' to={'/about'}>About</Link>
      </div>
    </div>
  );
};

export default Nav;