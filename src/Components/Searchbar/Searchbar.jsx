import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6';

const Searchbar = () => {
  return (
    <div className='flex items-center justify-content'> 
         <input
          type="text"
          placeholder="Search for books"
          className='ml-[150px] h-[34px] w-[500px] rounded-md'
        />
          <FaMagnifyingGlass className='pl-2 text-2xl text-slate-500 cursor-pointer hover:text-black'  />
    </div>
  )
};

export default Searchbar;