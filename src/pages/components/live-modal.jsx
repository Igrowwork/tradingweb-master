import React, { useContext, useState } from "react";
import { RouteContext } from "../../../context/context";
import { RxCross2 } from "react-icons/rx";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import Image from "next/image";
import { TbLoaderQuarter } from "react-icons/tb";
import { useRouter } from "next/navigation";

const LiveModal = () => {
  const router = useRouter()
  const { livePopup, LivePopupClose } = useContext(RouteContext);
  const [isCompStat, setIsCompStat] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    transactionId: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      // Get token from local storage
      const token = localStorage.getItem('token'); // Ensure this matches your local storage key

      const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/live/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      toast.success('Payment submitted successfully!');
      // console.log('Response:', response.data);

      // Reset form or update state as needed
      setIsCompStat(isCompStat + 1); 
      setFormData({
        transactionId: '',
        amount: '',
      })

      setTimeout(() => {
        router.refresh();
        setIsCompStat(1);
      }, 3000);
      

    } catch (error) {
      console.error('Error submitting payment:', error.response ? error.response.data : error.message);
      toast.error('Error submitting payment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {livePopup && (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-gray-800 bg-opacity-50">
          <div className="relative p-4 w-full max-w-xl">
            <div className="relative bg-secondary-main text-white rounded-xl overflow-hidden">
              <div className="relative">
                <div className="flex items-center justify-between px-4 md:px-5 pt-4">
                  <h1 className="text-2xl font-bold">Live Account</h1>
                  <button onClick={LivePopupClose} className="text-gray-400 hover:text-gray-900 rounded-lg w-8 h-8">
                    <RxCross2 />
                  </button>
                </div>
                <ToastContainer />
                <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-lg w-full">
          
                  {isCompStat === 1 && (
                    <div>
                      <p className="block text-sm font-medium mb-2">Scan to Pay</p>
                      <div className="relative w-72 h-72 border border-white rounded-md mx-auto">
                        <Image src="/images/QR_Code.jpg" alt="QR Code" fill className="object-contain p-2" />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="flex flex-col w-full">
                          <label className="md:text-sm max-md:text-[12px]">Network:</label>
                          <input
                            className="outline-none border border-white bg-transparent w-full p-2 rounded-md px-4 text-sm"
                            value="Tron (TRC20)"
                          />
                        </div>
                        
                        <div className="flex flex-col w-full">
                          <label className="md:text-sm max-md:text-[12px]">Deposit Address:</label>
                          <input
                            className="outline-none border border-white bg-transparent w-full p-2 rounded-md px-4 text-sm"
                            value="TTHfgKoEp9MQVG4fmc35VHeDmFN9vrRGgr"
                          />
                        </div>
                        <div>
                          <p className="block text-sm font-medium">Transaction ID</p>
                          <input
                            type="text"
                            name="transactionId" 
                            value={formData.transactionId} 
                            onChange={handleChange} 
                            className="outline-none border border-white bg-transparent w-full p-1 rounded-md px-4 text-sm" 
                            placeholder="Enter your transaction Id" 
                            required 
                          />
                        </div>
                        <div>
                          <p className="block text-sm font-medium">Amount</p>
                          <input 
                            type="number" 
                            name="amount" 
                            value={formData.amount} 
                            onChange={handleChange} 
                            className="outline-none border border-white bg-transparent w-full p-1 rounded-md px-4 text-sm no-spinner" 
                            placeholder="Enter amount" 
                            required 
                          />
                        </div>
                      </div>
                      <button type="submit" className={`w-full bg-primary-main text-white font-bold py-2 rounded mt-4 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isLoading}>
                        {isLoading ? <TbLoaderQuarter className="animate-spin inline-block" /> : 'Submit'}
                      </button>
                    </div>
                  )}
                  { isCompStat === 2 && (
                  <div className="text-center mb-4">
                      <p className="text-white text-sm mb-2">Payment Done</p>
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <h1 className="text-white text-2xl font-bold">Booking Confirmed</h1>
                    </div>
                  )
                  }
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveModal;
