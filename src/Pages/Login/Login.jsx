import  { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-sm border rounded-lg bg-white p-6 shadow-lg'>
        <form action="">
          <h4 className='text-2xl  mb-6 text-center'>Login</h4>
          <div className='mb-4'>
            <input
              type="text"
              placeholder='Email'
              className='w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-6 relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              className='w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline'
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className='absolute right-2 top-2 focus:outline-none'
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className='w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Login
          </button>
          <p className='mt-4 text-center'>
            Not registered yet?{' '}
            <Link to="/signup" className='text-blue-500 hover:underline'>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
