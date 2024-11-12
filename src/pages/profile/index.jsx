/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect , useContext } from 'react';
import { RiPencilFill } from "react-icons/ri";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Link from 'next/link';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import axiosInstance from '@/utils/axiosInstance';
import axios from 'axios';
import { RouteContext } from '../../../context/context';

const Profile = () => {
  const router = useRouter();
  const { handleLogout } = useContext(RouteContext)


  // State management for form fields
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: ''
  });

  // State for loading and error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axiosInstance.put('/api/auth/update-profile', formData);
      alert('Profile updated successfully!');
      // Update the form with the latest data from the response
      setFormData({
        name: response.data.user.name,
        number: response.data.user.number, // Ensure 'number' matches your API response
        email: response.data.user.email
      });
      console.log('Updated User Data:', response.data.user);
    } catch (err) {
      console.error('Error updating profile:', err);
      if (err.response) {
        // Server responded with a status other than 2xx
        setError(err.response.data.message || 'Failed to update profile');
      } else if (err.request) {
        // Request was made but no response received
        setError('No response from server. Please try again later.');
      } else {
        // Something else happened
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch user profile data on mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (typeof window === 'undefined') return; // Ensure this runs only on the client

      const token = localStorage.getItem('token');
      if (!token) {
        // Redirect to login if no token is found
        router.push('/');
        return;
      }

      try {
        // const decodedToken = jwt-decode(token); // Use corrected import
        // // Verify token expiration
        // const currentTime = Date.now() / 1000;
        // if (decodedToken.exp < currentTime) {
        //   // Token has expired
        //   localStorage.removeItem('token');
        //   router.push('/');
        //   return;
        // }

        const response = await axiosInstance.get('/api/auth/profile');
        setFormData({
          name: response.data.user.name,
          number: response.data.user.number, // Ensure 'number' matches your API response
          email: response.data.user.email

        });
      } catch (err) {
        console.error('Error fetching user profile:', err);
        if (err.response) {
          // Server responded with a status other than 2xx
          setError(err.response.data.message || 'Failed to load profile data.');
        } else if (err.request) {
          // Request was made but no response received
          setError('No response from server. Please check your network.');
        } else {
          // Something else happened
          setError('An unexpected error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [router]);


  return (
    <>
      <div className='w-full md:relative text-[#FFF]'>
        {/* Background Images */}
        <img className='h-[100vh] w-full max-md:hidden' src="/images/image18.png" alt="" />
        <img className='h-[74.2vh] w-full max-md:hidden' src="/images/image18.png" alt="" />

        <div className='bg-[#7A97AD] md:w-[90%] md:absolute md:top-0 md:left-[5%]'>
       
        <div className='bg-[#7A97AD] md:w-[90%] md:absolute md:top-0 md:left-[5%]'>
          <Navbar />
          <div className='relative max-md:w-[90%] max-md:mx-auto bg-[#0B3B5C] border border-[#66D2EF] max-md:full md:rounded-b-[40px] max-md:rounded-b-[20px] md:pt-[40px] max-md:pb-[60px] md:px-[20px] md:mt-[40px] max-md:mt-[40px] md:mx-[20px]'>
            
            {/* Navigation Links */}
            <div className='flex justify-between items-center md:px-4 max-md:px-4'>
              <div className='flex md:gap-4 max-md:gap-4 md:py-8 max-md:py-6'>
                <Link href='/profile' className='md:text-[22px] max-md:text-[16px] text-[#D7D7D7] hover:text-[#66D2EF] font-[600] md:leading-[28.889px]'>Profile</Link>
                <Link href='/withdrawal' className='md:text-[22px] max-md:text-[16px] text-[#D7D7D7] hover:text-[#66D2EF] font-[600] md:leading-[28.889px]'>Withdrawal</Link>
              </div>
              <div onClick={handleLogout} className="border border-[#76D7F1] text-sm text-[#7AD8F1] hover:text-[#0b3b5cb3] hover:bg-[#7AD8F1] rounded-md flex items-center gap-2 cursor-pointer px-4">
                LogOut
              </div>
            </div>

            {/* User Information and Edit Button */}
            <div className='flex justify-between items-center max-md:items-start md:px-8 max-md:px-4'>
              <div className='pro-img flex items-center md:gap-[24px] max-md:gap-[12px]'>
                <div className='md:h-[92px] max-md:h-[42px] md:w-[92px] max-md:w-[42px] rounded-full bg-[#7A97AD]'></div>
                <div className="user">
                  <h1 className='md:text-[20px] font-[500] text-[#FFF]'>{formData.name || 'Loading...'}</h1>
                  <h1 className='md:text-[16px] font-[400] text-[#FFF] opacity-[0.5]'>{formData.email || 'Loading...'}</h1>
                </div>
              </div>

              <div className='edit flex items-center md:gap-[8px] max-md:gap-[4px] hover:text-[#66D2EF]'>
                <RiPencilFill className='md:text-[20px] max-md:text-[16px] text-[#FFF]' />
                <h1 className='text-[#FFF] md:text-[18px] max-md:text-[14px]'>Edit</h1>
              </div>
            </div>

            {/* Form */}
            {loading ? (
              <p className='text-white text-center'>Loading...</p>
            ) : (
              <form onSubmit={handleSubmit} className='max-md:w-[100%] md:px-8 max-md:px-4 md:py-[40px] max-md:mt-[10px] flex max-md:flex-col items-start justify-between max-md:gap-4'>
                <div className='max-md:w-full md:w-[48%] flex flex-col md:justify-between md:gap-[24px] max-md:gap-4'>
                  <div className='flex flex-col md:gap-[8px]'>
                    <label className='text-[#FFF] max-md:text-[14px]' htmlFor="name">Name</label>
                    <input
                      className='max-md:w-full bg-transparent md:h-[40px] outline-none md:rounded-[8px] max-md:rounded-[4px] border border-[#D9D9D9] md:px-[10px] max-md:px-[5px] max-md:py-[6px] md:text-[14px] max-md:text-[12px] font-[500] text-[#BEBEBE]'
                      type="text"
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Full Name'
                      required
                    />
                  </div>
                  <div className='flex flex-col md:gap-[8px]'>
                    <label className='text-[#FFF] max-md:text-[14px]' htmlFor="number">number Number</label>
                    <input
                      className='md:w-[98%] max-md:w-full bg-transparent md:h-[40px] outline-none md:rounded-[8px] max-md:rounded-[4px] border border-[#D9D9D9] md:px-[10px] max-md:px-[5px] max-md:py-[6px] md:text-[14px] max-md:text-[12px] font-[500] text-[#BEBEBE]'
                      type="tel"
                      name='number'
                      value={formData.number}
                      onChange={handleChange}
                      placeholder='Phone Number'
                      required
                    />
                  </div>
                </div>
                <div className='max-md:w-full md:w-[48%] flex flex-col md:gap-[8px]'>
                  <label className='text-[#FFF] max-md:text-[14px]' htmlFor="email">Email Address</label>
                  <input
                    className='md:w-[98%] max-md:w-full bg-transparent md:h-[40px] outline-none md:rounded-[8px] max-md:rounded-[4px] border border-[#D9D9D9] md:px-[10px] max-md:px-[5px] max-md:py-[6px] md:text-[14px] max-md:text-[12px] font-[500] text-[#BEBEBE]'
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email ID'
                    required
                  />
                </div>
                <button type="submit" className="block bg-[#DA4540] text-white px-4 py-2 rounded mt-4">Submit</button>
              </form>
            )}

            {/* Display error message */}
            {!loading && error && <p className='text-red-500 text-center'>{error}</p>}
          </div>

          {/* Footer */}
          <div className='w-full md:pt-[100px] max-md:pt-[70px]'>
            <Footer />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Profile;

