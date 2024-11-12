/* eslint-disable @next/next/no-img-element */
import React , {useContext} from 'react'
import CompetitorModal from './competitor-modal'
import LiveModal from './live-modal'
import { RouteContext } from '../../../context/context'
import { toast, ToastContainer } from 'react-toastify'

const OurService = () => {
  const { PopupOpen , LivePopupOpen ,token } = useContext(RouteContext)

  

  return (
  <div className='w-full h-full'>
      <div className="page2 w-full h-full md:pt-[30px] max-md:mx-auto md:pb-[64px] max-md:pb-[30px] flex flex-col">
          <div className="services max-md:pt-4">
            <h1 data-aos="fade-flip" className='text-[#0B3B5C] md:text-[38px] max-md:text-[20px] font-[700] md:leading-[130%] md:tracking-[-0.76px] text-center'>Our Services</h1>
            <p data-aos="fade-flip" className='text-[#D8D8D8] md:text-[16px] max-md:text-[12px] font-[400] md:leading-[150%] text-center md:mt-[16px] max-md:mt-[8px] max-md:px-4'>Your Path To The trading World With MetaFX will Make you Big</p>
          </div>
          <div className="account-box w-full grid grid-cols-2 justify-center items-center md:gap-[30px] max-md:gap-[8px] md:mt-[24px] max-md:mt-[20px] md:px-[135px] max-md:px-4">
            <div data-aos="fade-left" data-aos-duration="1000" className="left-box bg-[#0B3B5C] md:rounded-[20px] max-md:rounded-[10px] inline-flex flex-col border border-[#E5F4F2] justify-end items-center md:pt-[40px] max-md:pt-[20px] max-md:[20px] md:px-[30px] max-md:px-[15px] md:pb-[25px] max-md:pb-[15px]">
              <div className="md:h-[82px] max-md:h-[40px] md:w-[82px] max-md:w-[40px] bg-[#66D2EF] md:rounded-[20px] max-md:rounded-[10px] md:p-[20px] max-md:p-[10px] flex items-center justify-center md:mb-[30px] max-md:mb-[15px]">
                <img className='md:w-[42px] max-md:w-[24px] md:h-[42px] max-md:h-[24px]' src="\images\competitor.png" alt="" />
              </div>
              <h1 className='md:text-[28px] max-md:text-[18px] font-[600] md:leading-[130%] md:tracking-[-0.28px] text-center md:mb-[24px]'>Competition Account</h1>
              <p className='max-md:hidden md:text-[16px] font-[400] md:leading-[150%] text-center'>{`Win up to 1000$ cash First time ever in the market. Just 50 $ Funded Challenge account with no Drawdown and no rules. Trade as you like and make big money.`}</p>
              <button onClick={PopupOpen} className='md:h-[64.373px] max-md:h-[48px] max-md:w-[123px] md:rounded-[16px] max-md:rounded-[8px] border border-[#66D2EF] hover:text-[#0b3b5cb3] hover:bg-[#7AD8F1] font-[600] md:text-[16px] max-md:text-[12px] text-center text-[#66D2EF] md:px-10 max-md:px-5 md:mt-[30px] max-md:mt-[15px]'>Register</button>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" className="right-box bg-[#0B3B5C] md:rounded-[20px] max-md:rounded-[10px] inline-flex flex-col border border-[#E5F4F2] justify-end items-center md:pt-[40px] max-md:pt-[20px] max-md:[20px] md:px-[30px] max-md:px-[15px] md:pb-[25px] max-md:pb-[15px]">
              <div className="md:h-[82px] max-md:h-[40px] md:w-[82px] max-md:w-[40px] bg-[#66D2EF] md:rounded-[20px] max-md:rounded-[10px] md:p-[20px] max-md:p-[10px] flex items-center justify-center md:mb-[30px] max-md:mb-[15px]">
                <img className='md:w-[42px] max-md:w-[24px] md:h-[42px] max-md:h-[24px]' src="\images\live.png" alt="" />
              </div>
              <h1 className='max-md:w-[50%] md:text-[28px] max-md:text-[18px] font-[600] md:leading-[130%] md:tracking-[-0.28px] text-center md:mb-[24px]'>Live Account</h1>
              <p className='max-md:hidden md:text-[16px] font-[400] md:leading-[150%] text-center'>{`Register a live account in just 3 minutes! Trade with the lowest spreads, enjoy a swap-free experience, and benefit from a no-commission account.`}</p>
              {
                token ?
                <button onClick={notify} className='md:h-[64.373px] max-md:h-[48px] max-md:w-[123px] md:rounded-[16px] max-md:rounded-[8px] border border-[#66D2EF] hover:text-[#0b3b5cb3] hover:bg-[#7AD8F1] font-[600] md:text-[16px] max-md:text-[12px] text-center text-[#66D2EF] md:px-10 max-md:px-5 md:mt-[30px] max-md:mt-[15px]'>Register</button>
                :
                <button onClick={LivePopupOpen} className='md:h-[64.373px] max-md:h-[48px] max-md:w-[123px] md:rounded-[16px] max-md:rounded-[8px] border border-[#66D2EF] hover:text-[#0b3b5cb3] hover:bg-[#7AD8F1] font-[600] md:text-[16px] max-md:text-[12px] text-center text-[#66D2EF] md:px-10 max-md:px-5 md:mt-[30px] max-md:mt-[15px]'>Register</button>
              }
            </div>
          </div>
        </div>
  </div>
  )
}

export default OurService