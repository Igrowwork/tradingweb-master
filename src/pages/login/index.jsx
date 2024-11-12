// pages/login.js

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/auth/login`, formData);
      // Assuming the backend sends a token upon successful login
      const { token } = res.data;

      // Store the token in localStorage or cookies
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
      }
      router.push('/');
      toast.success('Login Succesfully');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        setError('Login failed. Please try again.');
        toast.error('Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[rgba(11,59,92,0.70)] md:p-0 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-secondary-main p-8 rounded-lg shadow-lg w-full max-w-md "
      >
         <h1 className='md:text-[30px] max-md:text-[30px]  text-primary-main  text-center my-2'>Meta <b className='text-[#FFF]'>FX</b> </h1>
        <h2 className="text-2xl text-white font-medium text-center">Welcome back!</h2>
        <p className="mb-6 text-white mt-1 text-center">Enter your Credentials to access your account</p>

        {/* Display error message */}
        {/* {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )} */}

        <div className="mb-4">
          <label className="block text-white font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-white font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your password"
            required
          />
          <Link href="/forget-password" className="text-red-400 text-sm float-right mt-0.5">forget-password</Link>
        </div>

        <button
          type="submit"
          className="w-full bg-primary-main text-white py-2 rounded-md hover:bg-primary-dark transition duration-300 mt-4"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <p className="text-center text-sm text-white mt-2">{`I don't have an account `}<Link href="/register" className="text-primary-main hover:underline px-1">Register</Link></p>
      </form>
      
      <ToastContainer />
    </div>
  );
};

export default Login;
