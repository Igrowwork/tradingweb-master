// src/components/Register.jsx

import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Use Next.js router
import { toast, ToastContainer } from 'react-toastify'; // Optional: For better user notifications
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const router = useRouter();

  // State for registration form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    image: null, // Add image to formData
  });

  // State for OTP verification
  const [otp, setOtp] = useState('');

  // State to manage which form to display
  const [isOTPStage, setIsOTPStage] = useState(false);

  // Loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes for registration form
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({
        ...formData,
        image: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle OTP input change
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  // Handle registration form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setLoading(true);

    // Validate if image is selected
    if (!formData.image) {
      setError('Please upload an image.');
      setLoading(false);
      return;
    }

    // Prepare FormData
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('number', formData.number);
    data.append('password', formData.password);
    data.append('image', formData.image); // Append image

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/auth/register`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.message) {
        setSuccessMessage(response.data.message);
        setIsOTPStage(true);
        toast.success(response.data.message); // Optional: Toast notification
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
        toast.error(err.response.data.message); // Optional: Toast notification
      } else {
        setError('An unexpected error occurred.');
        toast.error('An unexpected error occurred.'); // Optional: Toast notification
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP verification form submission
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/auth/verify-otp`,
        {
          email: formData.email,
          otp,
        }
      );

      if (response.data.message) {
        setSuccessMessage(response.data.message);
        toast.success(response.data.message); // Optional: Toast notification
        // Redirect to login page after a short delay
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
        toast.error(err.response.data.message); // Optional: Toast notification
      } else {
        setError('An unexpected error occurred.');
        toast.error('An unexpected error occurred.'); // Optional: Toast notification
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Initialize Toast Container */}
      <ToastContainer />

      <div className="min-h-screen flex justify-center items-center bg-[rgba(11,59,92,0.70)] md:p-0 p-2">
        {/* Registration Form */}
        {!isOTPStage && (
          <form
            onSubmit={handleRegister}
            className="bg-secondary-main p-8 rounded-lg shadow-lg w-full max-w-xl"
            encType="multipart/form-data" // Ensure form encoding
          >
            <h1 className="md:text-[30px] max-md:text-[30px] text-primary-main text-center my-2">
              Meta <b className="text-[#FFF]">FX</b>
            </h1>
            <h2 className="text-2xl font-bold text-center mb-4 text-white">
              Sign up & Start Trading
            </h2>
            {/* Display success message */}
            {successMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                {successMessage}
              </div>
            )}

            {/* Display error message */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <div className="mb-4">
              <label
                className="block text-white font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-white font-semibold mb-2"
                htmlFor="email"
              >
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

            <div className="mb-4">
              <label
                className="block text-white font-semibold mb-2"
                htmlFor="number"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-white font-semibold mb-2"
                htmlFor="image"
              >
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-white"
                required
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-white font-semibold mb-2"
                htmlFor="password"
              >
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
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-main text-white py-2 rounded-md transition duration-300 hover:bg-primary-dark"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>

            <p className="text-center text-sm text-white mt-2">
              Already have an account{' '}
              <Link href="/login">
                <p className="text-primary-main hover:underline px-1">Login</p>
              </Link>
            </p>
          </form>
        )}

        {/* OTP Verification Form */}
        {isOTPStage && (
          <form
            onSubmit={handleVerifyOtp}
            className="bg-secondary-main p-8 rounded-lg shadow-lg w-full max-w-md"
          >
            <h2 className="text-2xl font-bold text-center mb-6 text-white">
              Verify OTP
            </h2>

            {/* Display success message */}
            {successMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                {successMessage}
              </div>
            )}

            {/* Display error message */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            <div className="mb-6">
              <label
                className="block text-white font-semibold mb-2"
                htmlFor="otp"
              >
                OTP
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={handleOtpChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter the OTP sent to your email"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-main text-white py-2 rounded-md transition duration-300 hover:bg-primary-dark"
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>

            <p className="text-center text-sm text-white mt-4">
             {` Didn't receive OTP?`}{' '}
              <button
                type="button"
                onClick={handleRegister} // Resend OTP by re-submitting the registration
                className="text-primary-main hover:underline px-1"
              >
                Resend
              </button>
            </p>
          </form>
        )}
      </div>
    </>
  );
};

export default Register;





// // src/components/Register.jsx

// import React, { useState } from 'react';
// import axios from 'axios';
// import Link from 'next/link';

// const Register = () => {
//   // State for registration form
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     number: '',
//     password: '',
//   });

//   // State for OTP verification
//   const [otp, setOtp] = useState('');

//   // State to manage which form to display
//   const [isOTPStage, setIsOTPStage] = useState(false);

//   // Loading and error states
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   // Handle input changes for registration form
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle input change for OTP
//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   // Handle registration form submission
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccessMessage('');
//     setLoading(true);

//     try {
//       const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/auth/register`, formData);

//       if (response.data.message) {
//         setSuccessMessage(response.data.message);
//         setIsOTPStage(true);
//       }
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.message) {
//         setError(err.response.data.message);
//       } else {
//         setError('An unexpected error occurred.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle OTP verification form submission
//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccessMessage('');
//     setLoading(true);

//     try {
//       const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/auth/verify-otp`, {
//         email: formData.email,
//         otp,
//       });

//       if (response.data.message) {
//         setSuccessMessage(response.data.message);
//         // Optionally, redirect to login page after successful verification
//         setTimeout(() => {
//           window.location.href = '/login';
//         }, 3000);
//       }
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.message) {
//         setError(err.response.data.message);
//       } else {
//         setError('An unexpected error occurred.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-[rgba(11,59,92,0.70)]  md:p-0 p-2">
//       {/* Registration Form */}
//       {!isOTPStage && (
//         <form
//           onSubmit={handleRegister}
//           className="bg-secondary-main p-8 rounded-lg shadow-lg w-full max-w-xl"
//         >
//           <h1 className='md:text-[30px] max-md:text-[30px]  text-primary-main  text-center my-2'>Meta <b className='text-[#FFF]'>FX</b> </h1>
//           <h2 className="text-2xl font-bold text-center mb-4 text-white">Sign up & Start Trading</h2>
//           {/* Display success message */}
//           {successMessage && (
//             <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
//               {successMessage}
//             </div>
//           )}

//           {/* Display error message */}
//           {error && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//               {error}
//             </div>
//           )}

//           <div className="mb-4">
//             <label className="block text-white font-semibold mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               placeholder="Enter your name"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-white font-semibold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-white font-semibold mb-2" htmlFor="number">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               id="number"
//               name="number"
//               value={formData.number}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               placeholder="Enter your phone number"
//               required
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-white font-semibold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-primary-main text-white py-2 rounded-md transition duration-300 hover:bg-primary-dark"
//           >
//             {loading ? 'Submitting...' : 'Submit'}
//           </button>
          
//           <p className="text-center text-sm text-white mt-2">{`Already have an account `}<Link href="/login" className="text-primary-main hover:underline px-1">Login</Link></p>
//         </form>
//       )}

//       {/* OTP Verification Form */}
//       {isOTPStage && (
//         <form
//           onSubmit={handleVerifyOtp}
//           className="bg-secondary-main p-8 rounded-lg shadow-lg w-full max-w-md"
//         >
//           <h2 className="text-2xl font-bold text-center mb-6 text-white">Verify OTP</h2>

//           {/* Display success message */}
//           {successMessage && (
//             <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
//               {successMessage}
//             </div>
//           )}

//           {/* Display error message */}
//           {error && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//               {error}
//             </div>
//           )}

//           <div className="mb-6">
//             <label className="block text-white font-semibold mb-2" htmlFor="otp">
//               OTP
//             </label>
//             <input
//               type="text"
//               id="otp"
//               name="otp"
//               value={otp}
//               onChange={handleOtpChange}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               placeholder="Enter the OTP sent to your email"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-primary-main text-white py-2 rounded-md transition duration-300 hover:bg-primary-dark"
//           >
//             {loading ? 'Verifying...' : 'Verify OTP'}
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Register;
