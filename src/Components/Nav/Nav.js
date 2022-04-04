import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import { FaWindowClose } from 'react-icons/fa'
import './Nav.css'

const Nav = () => {
  let [open, setOpen] = useState(false)
  return (
    <div className='navigation-div flex items-start md:items-center justify-between pl-1 md:px-5 py-2 mb-5' style={{backgroundColor: 'rgb(130, 78, 249)'}}>
      <div className='flex items-center'>
        <div className='flex items-center justify-between'>
          <img src="panda_logo.png" alt="" />
          <h1 className='text-4xl font-bold text-white'>X-Panda</h1>
        </div>
      </div>
      <div className='mt-7 mr-1 md:mt-0 md:mr-20 flex flex-col md:block items-end'>
        <div>
          {open ? <FaWindowClose onClick={() => setOpen(!open)} className='text-3xl md:hidden'/> : <TiThMenu onClick={() => setOpen(!open)} className='text-3xl md:hidden'/>}
        </div>
        <div className={`flex flex-col w-full md:w-auto md:block items-end md:static justify-end mt-1 md:mt-0 right-0 z-10 ${open ? 'block' : 'hidden'}`} style={{background: 'rgb(130, 78, 249)'}}>
          <Link className='text-xl font-bold mx-2' style={{color: '#F2EDED'}} to={'/home'}>Home</Link>
          <Link className='text-xl font-bold mx-2' style={{color: '#F2EDED'}} to={'/reviews'}>Reviews</Link>
          <Link className='text-xl font-bold mx-2' style={{color: '#F2EDED'}} to={'/dashboard'}>Dashboard</Link>
          <Link className='text-xl font-bold mx-2' style={{color: '#F2EDED'}} to={'/blogs'}>Blogs</Link>
          <Link className='text-xl font-bold mx-2' style={{color: '#F2EDED'}} to={'/about'}>About</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;