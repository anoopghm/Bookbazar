import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Searchbar from '../../Components/Searchbar/Searchbar';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
    setIsOpen(false);
  };

  const handleLogoutClick = () => {
    setIsLoggedin(false);
    navigate('/');
    setIsOpen(false);
  };

  const handleAddingbook = () => {
    if (isLoggedin) {
      navigate('/sellbook');
    } else navigate('/login');
    setIsOpen(false);
  };

  const handleHome = () => {
    navigate('/');
    setIsOpen(false);
  };

  return (
    <nav className='fixed top-0 left-0 right-0 h-[60px] bg-slate-200 flex items-center justify-between px-4 shadow-md z-10'>
      <h2 className='text-xl font-semibold'>BookBazar</h2>

      {/* Mobile Menu Button */}
      <button className='md:hidden' onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center space-x-6'>
        <button
          onClick={handleHome}
          className='p-2 bg-slate-700 text-white rounded-md hover:bg-black'>
          Home
        </button>
        <h6>Want to Sell Book?</h6>
        <button
          className='p-2 bg-slate-700 text-white rounded-md hover:bg-black'
          onClick={handleAddingbook}>
          Sell Book
        </button>
        <Searchbar />
        {isLoggedin ? (
          <button className='p-2 bg-red-600 text-white rounded-md' onClick={handleLogoutClick}>
            Logout
          </button>
        ) : (
          <button className='p-2 bg-blue-500 text-white rounded-md' onClick={handleLoginClick}>
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-16 left-0 w-full bg-slate-200 flex flex-col items-center py-4 md:hidden'>
          <button onClick={handleHome} className='py-2 w-full text-center hover:bg-slate-300'>
            Home
          </button>
          <button onClick={handleAddingbook} className='py-2 w-full text-center hover:bg-slate-300'>
            Sell Book
          </button>
          <Searchbar />
          {isLoggedin ? (
            <button onClick={handleLogoutClick} className='py-2 w-full text-center bg-red-600 text-white rounded-md'>
              Logout
            </button>
          ) : (
            <button onClick={handleLoginClick} className='py-2 w-full text-center bg-blue-500 text-white rounded-md'>
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
