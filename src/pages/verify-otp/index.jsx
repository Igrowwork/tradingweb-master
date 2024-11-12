// pages/verify-otp.js
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const VerifyOtp = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/auth/verify-otp`, { email, otp });
      setMessage(response.data.message);

      // Optionally redirect to another page (e.g., reset password)
      setTimeout(() => {
        router.push('/reset-password'); // Redirect to reset password page
      }, 3000); // Redirect after 3 seconds
    } catch (err) {
      setError(err.response.data.message || 'Something went wrong');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl font-bold">Verify OTP</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-500">{message}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="border border-gray-300 p-2 w-full mb-4"
        />
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter your OTP"
          required
          className="border border-gray-300 p-2 w-full mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
