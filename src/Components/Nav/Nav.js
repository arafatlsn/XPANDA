import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
  return (
    <div className='navigation-div flex items-center justify-between px-5 py-2 mb-5' style={{backgroundColor: 'rgb(130, 78, 249)'}}>
      <div className='flex items-center'>
        <img src="panda_logo.png" alt="" />
        <h1 className='text-4xl font-bold text-white'>X-Panda</h1>
      </div>
      <div className='mr-20'>
        <Link className='text-xl font-bold mx-2' style={{color: '#F2EDED'}} to={'/home'}>Home</Link>
        <Link className='text-xl font-bold mx-2' style={{color: '#F2EDED'}} to={'/reviews'}>Reviews</Link>
        <Link className='text-xl font-bold mx-2' style={{color: '#F2EDED'}} to={'/dashboard'}>Dashboard</Link>
        <Link className='text-xl font-bold mx-2' style={{color: '#F2EDED'}} to={'/blogs'}>Blogs</Link>
        <Link className='text-xl font-bold mx-2' style={{color: '#F2EDED'}} to={'/about'}>About</Link>
      </div>
    </div>
  );
};

export default Nav;