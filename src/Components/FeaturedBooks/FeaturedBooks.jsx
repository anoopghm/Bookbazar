import React from 'react';
import slider2 from '../../assets/feature1.jpg';

const FeaturedBooks = () => {
  return (
    <div className='mt-3 px-4'>
      <hr />
      <h1 className='text-3xl text-blue-500 mt-5 text-center'>
        Featured Books
      </h1>
      <div className='flex flex-wrap justify-center mt-5 gap-4'>
        {[...Array(3)].map((_, index) => (
          <div key={index} className='w-full sm:w-[300px] h-[400px] flex flex-col items-center justify-center border border-gray-300 rounded-lg hover:border-black p-4'>
            <img src={slider2} alt='' className='w-full h-[300px] object-cover rounded-lg' />
            <h5 className='font-normal mt-2'>Book: Deep Work</h5>
            <h5 className='text-sm'>Genre: Fiction</h5>
            <h5 className='font-semibold text-xl'>Price: Rs. 0</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;