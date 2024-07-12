import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {  FaMagnifyingGlass } from "react-icons/fa6";
import Searchbar from '../../Components/Searchbar/Searchbar';

const Navbar = () => {
    const navigate = useNavigate();
    const isLoggedin = true;
    const handleLoginClick = () => {
      navigate('/login');
    };
    const handleLogoutClick = () => {
        isLoggedin = false;
        navigate('/');
      };

      const handleAddingbook = () => {
        if(isLoggedin) {
            navigate('/sellbook');
        }
      }

      const [searchTerm, setSearchTerm] = useState('');

      const handleClear = () => {
           setSearchTerm('');
       };

       const handlehome = () => {
        navigate('/');
       }
  
    return (
      <div className='h-[60px] bg-slate-200 flex items-center justify-content'>
        <h2 className='p-[10px] text-xl font-semibold'>BookBazar</h2>

        <button
        onClick={handlehome}
        className='ml-10 p-2 bg-slate-700 text-m text-white rounded-md hover:bg-black'
        >
        Home
        </button>
       <h6 className='ml-7'>Want to Sell Book? </h6>
       <button
       className='ml-5 p-2 bg-slate-700 text-m text-white rounded-md hover:bg-black'
      onClick={handleAddingbook}
      >
        Sell book
      </button>

       <Searchbar />

      {  isLoggedin === false ?
       ( <button 
          className='ml-20 p-2 bg-blue-500 text-m text-white rounded-md align-content: flex-end'
          onClick={handleLoginClick}
        >
          Login
        </button> )
        :
        (<button
          className='ml-20 p-2 bg-red-600 text-m text-white rounded-md align-content: flex-end'
          onClick={handleLogoutClick}
        >
          Logout
        </button>
        ) }


      </div>
    );
  };
  
  export default Navbar;
  