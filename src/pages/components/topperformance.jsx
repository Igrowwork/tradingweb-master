/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import React from 'react'
import PerformanceSlider from './performance-slider';

const TopPerformance = () => {
  
  return (
    
      <div className="page4 md:w-full  md:pt-[160px]">
    <h1 data-aos="zoom-in" className='text-[#0B3B5C] font-[700] md:leading-[130%] md:tracking-[-0.76px] md:text-[38px] max-md:text-[20px] text-center max-md:pt-[150px]'>Top Performance</h1>
    <p  data-aos="zoom-in" className='md:mt-[16px] max-md:mt-[8px] md:text-[16px] max-md:text-[12px] font-[400] md:leading-[150%] text-[#D8D8D8] text-center max-md:px-4'>{`These are just a few features you’ll get using Anima Landing Page Ui Kit.`}</p>
    <div className="bg-1  relative md:mt-[40px] max-md:mt-[20px]">
      <img className= ' md:h-[450px] max-md:h-[300px] md:w-full opacity-[0.6]' src="\images\frame.png" alt="" />
      <div className="absolute top-0 left-0 h-[100%] w-[100%] pt-10"  data-aos="fade-up">
        
        <PerformanceSlider className='w-full h-full' />
      </div>
     
    </div>

  </div>
    
  )
}

export default TopPerformance