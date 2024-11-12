import axios from 'axios';
import React, { useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { LuUser2 } from 'react-icons/lu';
import { MdOutlineMailOutline, MdPhone } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { TbLoaderQuarter } from "react-icons/tb";

const LetTouch = () => {
  const [isLoading ,setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    number: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Form Data:', formData);
    try{
      setIsLoading(true);
      const res = await axios.post("https://sheetdb.io/api/v1/x4m1s8wuav4vf" , formData);
      toast.success("Data Submitted Succesfully")
      setIsLoading(false);
      setFormData({
        fullname: '',
        email: '',
        number: '',
        location: ''
      })
      // console.log(res ,"data");
    }
    catch(err){
      toast.error("Error Submitting data");
      console.log(err,"error submit data")
      setIsLoading(false);
    }
  };

  return (
    <div className='h-full w-full md:py-[60px] md:mt-[30px]'>
      <div className="lets-touch md:w-full h-full max-md:w-[90%] max-md:mx-auto bg-[#0B3B5C] border border-[#66D2EF] md:rounded-[20px] max-md:rounded-[10px] flex flex-col md:gap-4 max-md:gap-2 md:px-[60px] max-md:px-[30px] md:py-[18px] max-md:py-[10px] md:text-left max-md:text-center max-md:my-[30px]">
        <h1 data-aos="zoom-in" className='md:text-[38px] max-md:text-[24px] font-[700] text-[#66D2EF]'>{`Let’s get in touch!`}</h1>
        <p data-aos="zoom-in" className='md:text-[16px] max-md:text-[12px] font-[400] text-[#D8D8D8]'>Want to learn more about Meta Fx? Get in touch with our team.</p>
        <ToastContainer />
        <form 
          onSubmit={handleSubmit} 
          data-aos="zoom-in-right" 
          className='md:h-[40%] w-full md:mt-[40px] max-md:mt-[20px] flex flex-col md:items-start gap-4 max-md:gap-3'
        >
          <div className="form-content w-full h-full flex max-md:flex-col max-md:gap-2">
            <div className="left md:w-[50%] flex flex-col items-start max-md:items-center justify-center md:gap-4 max-md:gap-2">
              <div className='flex items-center justify-evenly gap-4 md:h-[60px] max-md:h-[40px] md:w-[96%] max-md:w-[100%] px-4 bg-white md:rounded-[20px] max-md:rounded-[10px]'>
                <LuUser2 className='text-[#2D2D2D] md:text-[24px]' />
                <input 
                  className='md:h-[50%] max-md:h-full md:w-full outline-none max-md:w-[85%] md:text-[16px] max-md:text-[14px] font-[400] px-4 border-l-[1px] border-[#2d2d2d2f] text-[#2D2D2D] bg-transparent' 
                  type="text" 
                  placeholder='Full Name' 
                  name='fullname' 
                  value={formData.fullname}
                  onChange={handleChange}
                />
              </div>
              <div className='flex items-center justify-evenly gap-4 md:h-[60px] max-md:h-[40px] md:w-[96%] max-md:w-[100%] px-4 bg-white md:rounded-[20px] max-md:rounded-[10px]'>
                <MdOutlineMailOutline className='text-[#2D2D2D] md:text-[24px]' />
                <input 
                  className='md:h-[50%] max-md:h-full md:w-full outline-none max-md:w-[85%] md:text-[16px] max-md:text-[14px] font-[400] px-4 border-l-[1px] border-[#2d2d2d2f] text-[#2D2D2D] bg-transparent' 
                  type="email" 
                  placeholder='Email ID' 
                  name='email' 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="right md:w-[50%] flex flex-col items-end max-md:items-center justify-center md:gap-4 max-md:gap-2">
              <div className='flex items-center justify-evenly gap-4 md:h-[60px] max-md:h-[40px] md:w-[96%] max-md:w-[100%] px-4 bg-white md:rounded-[20px] max-md:rounded-[10px]'>
                <MdPhone className='text-[#2D2D2D] md:text-[24px]' />
                <input 
                  className='md:h-[50%] max-md:h-full md:w-full outline-none max-md:w-[85%] md:text-[16px] max-md:text-[14px] font-[400] px-4 border-l-[1px] border-[#2d2d2d2f] text-[#2D2D2D] bg-transparent' 
                  type="tel" 
                  placeholder='Number' 
                  name='number' 
                  value={formData.number}
                  onChange={handleChange}
                />
              </div>
              <div className='flex items-center justify-evenly gap-4 md:h-[60px] max-md:h-[40px] md:w-[96%] max-md:w-[100%] px-4 bg-white md:rounded-[20px] max-md:rounded-[10px]'>
                <IoLocationSharp className='text-[#2D2D2D] md:text-[24px]' />
                <input 
                  className='md:h-[50%] max-md:h-full md:w-full outline-none max-md:w-[85%] md:text-[16px] max-md:text-[14px] font-[400] px-4 border-l-[1px] border-[#2d2d2d2f] text-[#2D2D2D] bg-transparent' 
                  type="text" 
                  placeholder='Location' 
                  name='location' 
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button disabled={isLoading} className='md:py-[16px] max-md:py-[8px] md:px-[50px] max-md:px-[20px] font-[600] bg-[#66D2EF] md:rounded-[14px] max-md:rounded-[5px] md:text-[16px] max-md:text-[12px] text-[#000] border-[1px] border-[#66D2EF] hover:bg-white flex md:gap-2 max-md:gap-1 items-center max-md:mx-auto gap-2'>
            Submit {isLoading && <TbLoaderQuarter className="animate-spin text-lg" /> } 
          </button>
        </form>
      </div>
    </div>
  );
};

export default LetTouch;
