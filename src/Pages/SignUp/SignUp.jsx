import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log(formData);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-sm border rounded-lg bg-white p-6 shadow-lg'>
        <form onSubmit={handleSubmit}>
          <h4 className='text-2xl mb-6 text-center'>Signup</h4>
          <div className='mb-4'>
            <input
              type="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline'
              required
            />
          </div>
          <div className='mb-4 relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline'
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className='absolute right-2 top-2 focus:outline-none'
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className='mb-6 relative'>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline'
              required
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className='absolute right-2 top-2 focus:outline-none'
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className='w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Signup
          </button>
          <p className='mt-4 text-center'>
            Already Registered?{' '}
            <Link to="/login" className='text-blue-500 hover:underline'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
