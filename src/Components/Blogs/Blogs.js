import React from 'react';

const Blogs = () => {
  return (
    <div className='w-4/5 mx-auto mb-5'>
      <h1 className='text-3xl'>Q. What is Context api?</h1>
      <h6><mark>Ans</mark></h6>
      <p className='mb-5'>
        Context api proviedes a way to pass data parent to all children. when some data needs to be accessible by many components that time context api can easily share data from parent to all children components. It replace props and easy than props. 
      </p>
      <h1 className='text-3xl'>Q. What is sementic tag?</h1>
      <h6><mark>Ans</mark></h6>
      <p className='mb-5'>
         Sementic tag define what kind of content inner the tag. example {'<form>, <table>, <img>, <header>, <nav>, <section> <footer> etc...'} this types tags provide information about the contents. a semantic tag clearly describe its meaning to both the browser and the developer.
      </p>
      <h1 className='text-3xl'>Q. What is the deffernce between inline, block, inline-block elements?</h1>
      <h6><mark>Ans</mark></h6>
      <h6><mark>inline</mark></h6>
      <p>inline element not possible setting width, vertical padding. inline element allow besides other element.</p>
      <h6><mark>inline-block</mark></h6>
      <p>inline-block, element possible to setting width, vertical padding. and it also allow beside othe element.</p>
      <h6><mark>block</mark></h6>
      <p>block element can possible setting width, vertical padding. but block element don't allow other element besides.</p>
    </div>
  );
};

export default Blogs;