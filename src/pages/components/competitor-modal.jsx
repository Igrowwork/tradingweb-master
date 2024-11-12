import React, { useContext, useState } from "react";
import { RouteContext } from "../../../context/context";
import { RxCross2 } from "react-icons/rx";
import { IoCloudUpload } from "react-icons/io5";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

const CompetitorModal = () => {
  const router = useRouter();
  const { isPopup, PopupClose } = useContext(RouteContext);
  const [isCompStat, setIsCompStat] = useState(0);
  const [formData, setFormData] = useState({
    trasitionid: '',
    amount: '',
    dateOption: '', 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Submitting form...");
  
    // Check for empty fields
    if (!formData.amount || !formData.trasitionid || !formData.dateOption) {
      toast.error('Please fill in all required fields');
      console.log("Form submission failed: some fields are empty");
      return;
    }
  
    // Log the data being submitted
    console.log("Form Data:", formData);
  
    // Prepare the data for submission
    const dataToSubmit = {
      dateRange: formData.dateOption,
      amount: formData.amount,
      transactionId: formData.trasitionid,
    };
  
    // Retrieve token from local storage
    const token = localStorage.getItem('token');
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/competitor/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Use the token retrieved from local storage
        },
        body: JSON.stringify(dataToSubmit),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      // console.log("Response from API:", result);
      toast.success("Data submitted successfully!")
      setIsCompStat(2)
      // toast.success('Payment submitted successfully!');
      setFormData({
        trasitionid: '',
        amount: '',
        dateOption: '',
      });

      setTimeout(() => {
        router.refresh();
        setIsCompStat(0);
      }, 3000);
      
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error('Failed to submit data');
    }
  };
  
  return (
    <>
      {isPopup && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-gray-800 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-xl">
            <div className="relative bg-secondary-main text-white rounded-xl overflow-hidden">
              <div
                className="bg-primary-main/80 md:h-56 md:w-56 rounded-full absolute -left-10 top-0"
                style={{ filter: "blur(136.3035430908203px" }}
              />
              <div className="relative">
                <div className="flex items-center justify-between px-4 md:px-5 pt-4 rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    <h1 className="text-2xl font-bold">Competition Account</h1>
                  </h3>
                  <button
                    onClick={PopupClose}
                    className="text-gray-400 hover:text-gray-900 rounded-lg w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center p-2 dark:hover:text-primary-main"
                    type="button"
                  >
                    <RxCross2 />
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div>
                  
                <ToastContainer />
                  <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-lg w-full min" encType="multipart/form-data">
                    {isCompStat === 0 && (
                      <div>
                        <p className="mb-4">
                          {`Enter your details to register for a competition account`}
                        </p>

                        <div className="mb-4">
                          <label className="block mb-2" htmlFor="dateOption">Select Date Option</label>
                          <select
                            name="dateOption"
                            value={formData.dateOption}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded bg-transparent text-white"
                            required
                          >
                            <option value="" disabled>Select an option</option>
                            <option className="text-black" value="1-15">1-15</option>
                            <option className="text-black" value="15-30">15-30</option>
                          </select>
                        </div>

                        <div className="flex flex-col w-full my-2">
                          <label className="md:text-sm max-md:text-[12px]">Amount:</label>
                          <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                            className="outline-none border border-white bg-transparent w-full p-2 rounded-md px-4 text-sm no-spinner"
                          />
                        </div>

                        <button
                          onClick={() => setIsCompStat(isCompStat + 1)}
                          className="w-full bg-primary-main text-white font-bold py-2 rounded"
                        >
                          Next
                        </button>
                      </div>
                    )}
                    { isCompStat === 1 && (
                      <div>
                      <p className="block text-sm font-medium mb-2 mt-4">Scan to Pay</p>
                      <div className="relative w-60 h-60 border border-white rounded-md mx-auto">
                        <Image src="/images/QR_Code.jpg" alt="" fill className="object-contain p-2" />
                      </div>

                      <div className="">
                        <div className="flex flex-col w-full">
                          <label className="md:text-sm max-md:text-[12px]">Network:</label>
                          <input
                            name="network"
                            onChange={handleChange}
                            required
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
                        <div className="flex flex-col w-full">
                          <label className="md:text-sm max-md:text-[12px]">Transaction ID:</label>
                          <input
                            type="text"
                            name="trasitionid"
                            value={formData.trasitionid}
                            onChange={handleChange}
                            required
                            className="outline-none border border-white bg-transparent w-full p-2 rounded-md px-4 text-sm"
                          />
                        </div>
                      </div>

                      <div className="flex w-[100%] justify-between mt-2">
                        {/* Additional UI components can go here */}
                      </div>

                      <button
                        type="submit"
                        className="mt-4 w-full bg-primary-main text-white font-bold py-2 rounded"
                      >
                        Submit
                      </button>
                      <button
                        onClick={() => setIsCompStat(isCompStat - 1)}
                        className="w-full bg-primary-main text-white font-bold py-2 rounded mt-2"
                      >
                        Previous
                      </button>
                    </div>
                    )}

          { isCompStat === 2 && (
                  <div className="text-center p-4">
                      <p className="text-white text-sm ">Payment Done</p>
                      <div className="flex items-center justify-center p-4">
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
                      <h1 className="text-white text-2xl font-bold mb-4">Booking Confirmed</h1>
                    </div>
                  )
                  }
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompetitorModal;
