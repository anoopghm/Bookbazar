import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Searchbar from '../../Components/Searchbar/Searchbar';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    setIsLoggedin(false);
    navigate('/');
  };

  const handleAddingbook = () => {
    if (isLoggedin) {
      navigate('/sellbook');
    }
    else navigate('/login');
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className='fixed top-0 left-0 right-0 h-[60px] bg-slate-200 flex items-center justify-between p-4 shadow-md z-10'>
      <h2 className='text-xl font-semibold'>BookBazar</h2>

      <div className='flex items-center'>
        <button
          onClick={handleHome}
          className='ml-10 p-2 bg-slate-700 text-m text-white rounded-md hover:bg-black'>
          Home
        </button>

        <h6 className='ml-7'>Want to Sell Book? </h6>
        <button
          className='ml-5 p-2 bg-slate-700 text-m text-white rounded-md hover:bg-black'
          onClick={handleAddingbook}>
          Sell book
        </button>
      </div>

      <Searchbar />

      <div className='flex items-center'>
        {isLoggedin ? (
          <button
            className='ml-5 p-2 bg-red-600 text-m text-white rounded-md'
            onClick={handleLogoutClick}>
            Logout
          </button>
        ) : (
          <button
            className='ml-5 p-2 bg-blue-500 text-m text-white rounded-md'
            onClick={handleLoginClick}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
