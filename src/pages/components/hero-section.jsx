/* eslint-disable @next/next/no-img-element */
import React from 'react'

const HeroSection = () => {
  return (
  <div className='h-full w-full' data-aos-duration="1000">
      
      <div className="page1 md:h-[500px] h-full w-full bg-secondary-main md:flex rounded-b-[42px] overflow-hidden">
      <div className="left md:w-[90%] ">
        <h1 data-aos="fade-right"  data-aos-duration="2000" className='xl:w-full lg:text-[40px] lg:w-[100vh] md:text-[30px] max-md:text-[24px] font-[700] uppercase md:tracking-[-1.6px] md:leading-[130%] max-md:px-4 md:pt-[70px] max-md:pt-[20px] md:ml-[40px] max-md:mx-auto max-md:text-center'>Your Path To The trading <span className='max-md:text-[18px]'>World With MetaFX</span> </h1>
        <p data-aos="fade-right"  data-aos-duration="2000" className=' md:text-[21px] max-md:text-[12px] font-[400] md:leading:[150%] text-[#D7D7D7] md:mt-[16px] max-md:mt-[8px] max-md:px-12 md:ml-[40px] max-md:text-center'>All in one The best Funded Account and The lowest spread live Broker account</p>
        <div data-aos="fade-up"  data-aos-duration="2000" className="md:w-[350px] max-md:w-full flex justify-evenly max-md:justify-center items-center md:gap-[20px] md:ml-[40px] md:mt-[32.8px] max-md:mt-[12px]">
          <div className="trust flex items-center md:gap-[9.5px] max-md:gap-[10px]">
            <h1 className='md:text-[37.8px] max-md:text-[20px] font-[700] md:leading-[46.8px]'>2943</h1>
            <p className='md:w-[54.9px] max-md:text-[12px] text-[#D7D7D7] font-[400] md:text-[12.6px] md:leading-[18px]'>Trusted Partners</p>
          </div>
          <p className='md:text-[27.9px] max-md:text-[20px] opacity-[0.3] max-md:mx-[10px]'>|</p>
          <div className="active flex items-center md:gap-[9.5px] max-md:gap-[10px]">
            <h1 className='md:text-[37.8px] max-md:text-[20px] font-[700] md:leading-[46.8px]'>1M+</h1>
            <p className='md:w-[54.9px] max-md:text-[12px] text-[#D7D7D7] font-[400] md:text-[12.6px] md:leading-[18px]'>Active Users</p>
          </div>
        </div>
        {/* <button className='max-md:hidden md:w-[230px] md:h-56px] p-[8px] rounded-[8px] border border-[#76D7F1] text-black bg-[#66D2EF] hover:text-[#66D2EF] hover:bg-[#0B3B5C] text-center md:text-[16px] max-md:text-[12px] font-[600] md:leading-[24px] md:ml-[135px] md:mt-[60px]'>Register</button> */}
      </div>
    <div className="right md:h-auto h-[25vh] w-full relative">
      <div className="h-full bg-primary-main md:w-28 rotate-[30deg] absolute md:top-[20%] right-[70%] rounded-full" />
      <div className="h-full bg-primary-main md:w-28 rotate-[30deg] absolute md:top-[15%] right-[25%] rounded-full" />
      <div className="bg-primary-main md:h-80 md:w-80 rounded-full absolute -right-10 bottom-[10%]" style={{filter:"blur(136.3035430908203px"}} />
      <img src="/images/01.png" alt="No Preview" className="md:absolute max-md:mx-auto md:h-[90%] max-md:h-[30vh] bottom-0 md:right-[20%]  max-md:ob" />
    </div>

  </div>
  </div>
  )
}

export default HeroSection