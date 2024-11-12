/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const JoinusTwo = () => {
  return (
    <div className='md:w-full max-md:w-[80%] max-md:mx-auto flex justify-center items-center'>
        <div className="join max-md:mx-auto md:mx-auto bg-[#0B3B5C] border border-[#66D2EF] md:rounded-[20px] max-md:rounded-[10px] flex flex-col items-center md:px-20 max-md:px-4 md:py-4 max-md:py-4">
            <img className='md:h-[64px]  max-md:h-[24px] md:w-[64px] max-md:w-[24px] md:mt-[10px] max-md:mt-[5px]' src="\images\telegram.png" alt="" />
            <h1 className='font-[700] md:text-[50px] max-md:text-[20px] md:leading-[130%] md:tracking-[-1px] text-center md:my-[20px] max-md:my-[10px]'>Telegram</h1>
            <p className='md:text-[21px] max-md:text-[12px] font-[400] md:leading-[150%] text-center'>Join us on telegram for latest updates at MetaFx_broker</p>
            <Link href="https://t.me/Metafx_broker" target="_blank">
            <button className='bg-[#66D2EF] rounded-[16px] md:py-[16px] max-md:py-[8px] md:px-[50px] max-md:px-[24px] text-[#2D2D2D] border border-[#66D2EF] hover:text-[#66D2EF] hover:bg-[#0B3B5C] md:text-[16px] max-md:text-[12px] font-[600] text-center md:leading-[24px] md:mt-[40px] max-md:mt-[20px] md:mb-[20px] max-md:[15px]'>Click Here</button>
            </Link>
          </div>
    </div>
  )
}

export default JoinusTwo