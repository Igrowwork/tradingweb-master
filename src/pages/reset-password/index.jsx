// pages/reset-password.js
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/auth/reset-password`, {
        email,
        otp,
        newPassword,
      });
      setMessage(response.data.message);

      // Optionally redirect to a login page or another page
      setTimeout(() => {
        router.push('/login'); // Redirect to the login page after successful reset
      }, 3000); // Redirect after 3 seconds
    } catch (err) {
      setError(err.response.data.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[rgba(11,59,92,0.70)] md:p-0 p-6">
      <form onSubmit={handleSubmit} className="bg-secondary-main p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-3xl text-white font-medium text-center mb-8">Reset Password</h1>
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-500">{message}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="border border-gray-300 p-2 w-full mb-4 rounded-md"
        />
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter your OTP"
          required
          className="border border-gray-300 p-2 w-full mb-4 rounded-md"
        />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter your new password"
          required
          className="border border-gray-300 p-2 w-full mb-4 rounded-md"
        />
        <button type="submit" className="w-full bg-primary-main text-white py-2 rounded-md hover:bg-primary-dark transition duration-300 mt-4">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
