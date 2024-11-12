/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from 'react';
import { RouteContext } from '../../../context/context';
import { useRouter } from 'next/router'; // Correct import for Next.js
import axios from 'axios';
import { RxCross2 } from 'react-icons/rx';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TbLoaderQuarter } from "react-icons/tb";

const LoginModal = () => {
  const { loginPopup, LoginPopupClose, LivePopupOpen, setToken, token } = useContext(RouteContext);
  
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate form data
      if (!formData.email || !formData.password) {
        toast.error("Please fill in all required fields");
        return;
      }

      setIsLoading(true);
      
      // Log formData to verify
      console.log('Submitting form data:', formData);
      
      const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/auth/login`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Log response to verify
      console.log('Login response:', res.data);
      localStorage.setItem("token" , res.data.token)
      // Assuming the token is in res.data.token
      setToken("token", res.data.token); // Adjust as per your context implementation
      toast.success("Logged in Successfully");
      if (res.data.isAdmin) {
        router.push('/admin'); // Redirect to admin dashboard
    } else {
      router.push('/')
    }
      setFormData({
        email: '',
        password: ''
      });
      
      setIsLoading(false);
      
      // Redirect to dashboard or desired page
      // router.push('/'); // Replace with your desired route
      LoginPopupClose();
    } catch (error) {
      setIsLoading(false);
      
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error Response:', error.response.data);
        toast.error(error.response.data.msg || 'Login failed');
      } else if (error.request) {
        // Request was made but no response received
        console.error('Error Request:', error.request);
        toast.error('No response from server');
      } else {
        // Something else caused the error
        console.error('Error Message:', error.message);
        toast.error('An unexpected error occurred');
      }
    }
  };

  return (
    <>
      {loginPopup && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-gray-800 bg-opacity-90"
        >
          <div className="relative p-4 w-full max-w-xl">
            {/* Modal content */}
            <div className="relative bg-secondary-main text-white rounded-xl overflow-hidden">
              <div 
                className="bg-primary-main/80 md:h-56 md:w-56 rounded-full absolute -left-10 top-0" 
                style={{ filter: "blur(136.3px)" }} // Corrected blur syntax
              />
              <div className="relative">
                <div className="flex items-center justify-between px-4 md:px-5 pt-4 rounded-t dark:border-gray-600 ">
                  <div>
                    <h1 className="text-2xl font-bold">Welcome back!</h1>
                    <p className="text-white mt-3">Enter your Credentials to access your live account</p>
                  </div>
                  <button
                    onClick={LoginPopupClose}
                    className="text-gray-400 hover:text-gray-900 rounded-lg w-8 h-8 inline-flex items-center justify-center p-2 dark:hover:text-primary-main"
                    type="button"
                  >
                    <RxCross2 />
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="w-full flex flex-col items-center">
                  <form
                    onSubmit={handleSubmit}
                    className="p-8 rounded-lg w-full"
                  >
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
                        className="w-full px-4 py-2 border bg-transparent rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
                        className="w-full px-4 py-2 border bg-transparent rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your password"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary-main text-white py-2 rounded-md hover:bg-[#7A97AD] transition duration-300 flex justify-center items-center gap-2"
                      disabled={isLoading} // Disable button while loading
                    >
                      {isLoading ? (
                        <>
                          Logging in <TbLoaderQuarter className="animate-spin text-lg" />
                        </>
                      ) : (
                        'Login'
                      )}
                    </button>
                  </form>
                <div className='flex md:gap-2 max-md:gap-2 md:py-[10px]'>
                <span className='md:text-[18px] text-center max-md:py-4'>{`Don't have an account? `} </span>
                <button onClick={LivePopupOpen} className='text-primary-main hover:text-[#7A97AD] md:text-[18px]'>Register</button>
                </div>
              </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default LoginModal;
