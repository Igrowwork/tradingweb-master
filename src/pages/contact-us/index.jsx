/* eslint-disable @next/next/no-img-element */
import React, { useState , useEffect } from 'react';
import Navbar from '../components/navbar';
import Joinus from '../components/joinus';
import { MdPhone } from 'react-icons/md';
import { MdOutlineMailOutline } from 'react-icons/md';
import { LuUser2 } from 'react-icons/lu';
import { IoLocationSharp } from 'react-icons/io5';
import Footer from '../components/footer';
import Layout from '../components/layout';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { TbLoaderQuarter } from 'react-icons/tb';

export default function Index() {
  const [isLoading ,setIsLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    number: '',
    location: '',
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
      console.log(res ,"data");
    }
    catch(err){
      toast.error("Error Submitting data");
      console.log(err,"error submit data")
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <div className='w-full md:relative md:mx:auto'>
        <img className='h-[100vh] w-full max-md:hidden' src='/images/image18.png' alt='' />
        <img className='h-[100vh] w-full max-md:hidden' src='/images/image18.png' alt='' />
        <img className='h-[36.9vh] w-full max-md:hidden' src='/images/image18.png' alt='' />

        <div className='md:w-[90%] max-md:w-full bg-[#7A97AD] md:absolute md:top-0 md:left-[5%]'>
          <div className='max-md:w-full h-full'>
            <Navbar />
          </div>
          <div className='h-full w-full text-white max-md:pt-[20px] flex flex-col max-md:items-center'>
            <div className='compartment flex bg-[#0B3B5C] md:w-[90%] max-md:w-[90%] md:mt-[40px] max-md:mx-auto md:rounded-[20px] border border-[#66D2EF] relative md:mx-auto max-md:rounded-[10px] max-md:pb-[100px] md:pb-[100px]'>
              <div
                className='bg-primary-main md:h-80 md:w-80 rounded-full absolute -right-10 bottom-[10%]'
                style={{ filter: 'blur(136.3035430908203px' }}
              />
              <div className='left-content md:w-[50%] md:mt-[30px] md:pl-[70px]'>
                <div className='images max-md:hidden md:h-[70%] md:w-[100%] relative'>
                  <img
                    className='md:h-[100%] md:w-[90%] absolute top-0 left-0 z-10 rounded-[10px]'
                    src='/images/bitmap1.png'
                    alt=''
                  />
                  <img
                    className='md:h-[100%] md:w-[90%] absolute right-0 bottom-0 opacity-[0.0986] rounded-[10px]'
                    src='/images/bitmap-bg.png'
                    alt=''
                  />
                </div>
              </div>
              <div className='lets-touch md:w-[50%] md:text-left max-md:w-full flex flex-col md:gap-4 max-md:gap-2 md:px-[60px] max-md:px-4 max-md:items-center md:py-[18px] max-md:text-center max-md:my-[30px] md:mx-auto z-10'>
                <h1 className='md:text-[38px] max-md:text-[24px] font-[700] text-[#66D2EF]'>{`Let’s get in touch!`}</h1>
                <p className='md:text-[16px] max-md:text-[12px] font-[400] text-[#D8D8D8]'>
                  Want to learn more about Meta Fx? Get in touch with our team.
                </p>
                <ToastContainer />
                <form className='md:h-[40%] w-full md:mt-[10px] max-md:mt-[20px] flex flex-col md:items-start md:gap-8 max-md:gap-3' onSubmit={handleSubmit}>
                  <div className='form-content w-full h-full flex md:flex-col max-md:flex-col md:gap-4 max-md:gap-2'>
                    <div className='left md:w-full flex flex-col items-start max-md:items-center justify-center md:gap-4 max-md:gap-2'>
                      <div className='flex items-center justify-evenly gap-4 md:h-[60px] max-md:h-[40px] md:w-full max-md:w-[100%] px-4 bg-white md:rounded-[20px] max-md:rounded-[10px]'>
                        <LuUser2 className='text-[#2D2D2D] md:text-[24px]' />
                        <input
                          className='md:h-[50%] max-md:h-full md:w-full outline-none max-md:w-[85%] md:text-[16px] max-md:text-[14px] font-[400] px-4 border-l-[1px] border-[#2d2d2d2f] text-[#2D2D2D] bg-transparent'
                          type='text'
                          placeholder='Full Name'
                          name='fullname'
                          value={formData.fullname}
                          onChange={handleChange}
                        />
                      </div>

                      <div className='flex items-center justify-evenly gap-4 md:h-[60px] max-md:h-[40px] md:w-full max-md:w-[100%] px-4 bg-white md:rounded-[20px] max-md:rounded-[10px]'>
                        <MdOutlineMailOutline className='text-[#2D2D2D] md:text-[24px]' />
                        <input
                          className='md:h-[50%] max-md:h-full md:w-full outline-none max-md:w-[85%] md:text-[16px] max-md:text-[14px] font-[400] px-4 border-l-[1px] border-[#2d2d2d2f] text-[#2D2D2D] bg-transparent'
                          type='email'
                          placeholder='Email ID'
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='right md:w-full flex flex-col items-end max-md:items-center justify-center md:gap-4 max-md:gap-2'>
                      <div className='flex items-center justify-evenly gap-4 md:h-[60px] max-md:h-[40px] md:w-full max-md:w-[100%] px-4 bg-white md:rounded-[20px] max-md:rounded-[10px]'>
                        <MdPhone className='text-[#2D2D2D] md:text-[24px]' />
                        <input
                          className='md:h-[50%] max-md:h-full md:w-full outline-none max-md:w-[85%] md:text-[16px] max-md:text-[14px] font-[400] px-4 border-l-[1px] border-[#2d2d2d2f] text-[#2D2D2D] bg-transparent'
                          type='tel'
                          placeholder='Number'
                          name='number'
                          value={formData.number}
                          onChange={handleChange}
                        />
                      </div>

                      <div className='flex items-center justify-evenly gap-4 md:h-[60px] max-md:h-[40px] md:w-full max-md:w-[100%] px-4 bg-white md:rounded-[20px] max-md:rounded-[10px]'>
                        <IoLocationSharp className='text-[#2D2D2D] md:text-[24px]' />
                        <input
                          className='md:h-[50%] max-md:h-full md:w-full outline-none max-md:w-[85%] md:text-[16px] max-md:text-[14px] font-[400] px-4 border-l-[1px] border-[#2d2d2d2f] text-[#2D2D2D] bg-transparent'
                          type='text'
                          placeholder='Location'
                          name='location'
                          value={formData.location}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <button disabled={isLoading} className='md:py-[16px] max-md:py-[8px] md:px-[50px] max-md:px-[20px] font-[600] bg-[#66D2EF] md:rounded-[14px] max-md:rounded-[5px] md:text-[16px] max-md:text-[12px] text-[#0h00] border-[1px] border-[#66D2EF] hover:text-[#66D2EF] hover:bg-white flex md:mt-[40px] items-center max-md:mx-auto'>
                  Submit {isLoading && <TbLoaderQuarter className="animate-spin text-lg" /> } 
                  </button>
                </form>
              </div>

              <div className='md:w-full absolute md:-bottom-[250px] max-md:-bottom-[100px] z-20'>
                <Joinus />
              </div>
            </div>
          </div>
          <div className='w-full h-full md:mt-[280px] max-md:mt-[130px]'>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
