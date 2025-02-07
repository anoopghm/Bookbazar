import React from 'react';
import slider2 from '../../assets/feature1.jpg';

const FeaturedBooks = () => {
  return (
    <div className='mt-3'>
      <hr />
      <h1 className='ml-[600px] text-3xl text-blue-500 mt-5'>
        Featured Books
      </h1>
      <div className='flex flex-wrap justify-center mt-5'>
        <div className='w-[300px] h-[400px] flex flex-col items-center justify-center border border-gray-300 rounded-lg mx-4 hover:border-black'>
          <img src={slider2} alt='' className='w-[300px] h-[300px] object-center rounded-lg' />
          <h5 className='font-normal mt-2'>Book: Deep Work</h5>
          <h5 className='text-sm'>Genre: Fiction</h5>
          <h5 className='font-semibold text-xl'>Price: Rs. 0</h5>
        </div>
        <div className='w-[300px] h-[400px] flex flex-col items-center justify-center border border-gray-300 rounded-lg mx-4 hover:border-black'>
          <img src={slider2} alt='' className='h-[300px] w-[300px] object-center rounded-lg' />
          <h5 className='font-normal mt-2'>Book: Deep Work</h5>
          <h5 className='text-sm'>Genre: Fiction</h5>
          <h5 className='font-semibold text-xl'>Price: Rs. 0</h5>
        </div>
        <div className='w-[300px] h-[400px] flex flex-col items-center justify-center border border-gray-300 rounded-lg mx-4 hover:border-black'>
          <img src={slider2} alt='' className='h-[300px] w-[300px] object-center rounded-lg' />
          <h5 className='font-normal mt-2'>Book: Deep Work</h5>
          <h5 className='text-sm'>Genre: Fiction</h5>
          <h5 className='font-semibold text-xl'>Price: Rs. 0</h5>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBooks;
