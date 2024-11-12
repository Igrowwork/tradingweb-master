/* eslint-disable @next/next/no-img-element */
// import React from 'react'
import React , {useContext} from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { RouteContext } from '../../../context/context'

const OurServicePage = () => {
  const { PopupOpen , LivePopupOpen  } = useContext(RouteContext)
  return (
    <div className=' w-full md:relative'>
      <img className='h-[100vh] w-full max-md:hidden' src="/images/image18.png" alt="" />
      <img className='h-[100vh] w-full max-md:hidden' src="/images/image18.png" alt="" />
      <img className='h-[84.2vh] w-full max-md:hidden' src="/images/image18.png" alt="" />

      <div className='md:w-[90%] max-md:full md:absolute md:top-0 md:left-[5%]'> 
        <div className="h-full w-full bg-[#7A97AD] text-white  ">
                <Navbar />
                <div data-aos="zoom-in"  className="com-acc bg-[#0B3B5C] rounded-[20px] border border-[#66D2EF] md:w-[90%] md:mx-auto md:pt-[30px] md:mt-[40px] max-md:mt-[20px] max-md:py-4 max-md:rounded-[8px] max-md:mx-4">
               
                    <h1 data-aos="zoom-in"  className='text-[#66D2EF] md:text-[38px] max-md:text-[20px] font-[700] text-center md:leading-[130%] md:tracking-[-0.76px] '>Competition Account</h1>
                    <p className='md:text-[16px] max-md:text-[14px] font-[400] md:leading-[150%] text-[#D8D8D8] text-center md:mt-[24px] max-md:mt-[12px]'>{`Trade on 1000$ live account and win upto 1000$ cash. Time to win it now`}</p>
                <div className="part flex max-md:flex-col items-center md:mx-[50px] md:mt-[34px] md:pb-[30px] max-md:pb-[15px]  max-md:mt-[15px] max-md:px-4 md:gap-[16px] max-md:gap-[8px]">

                <div className="images md:h-[380px] max-md:h-[250px] md:w-[455px] max-md:w-[250px] relative">
                <img className='md:h-[341px] max-md:h-[230px] md:w-[400px] max-md:w-[230px] absolute top-0 left-0 z-10 rounded-[10px]' src="\images\bitmap1.png" alt="" />

                <img className='md:h-[341px] max-md:h-[230px] md:w-[397px] max-md:w-[230px] absolute right-0 bottom-0 opacity-[0.0986] rounded-[10px]' src="\images\bitmap-bg.png" alt="" />
              </div>

              <div className="right-cont max-md:flex max-md:flex-col max-md:items-center max-md:gap-2 md:w-[50%] md:px-[38px] md:py-[30px]">
                <h1 className='md:text-[24px] max-md:text-[18px] font-[600] md:leading-[130%] md:tracking-[-0.48px] md:items-stretch max-md:text-center'>Change 50$ to 1000$, limited Time offer </h1>
                <p className=' max-md:text-justify text-[#D8D8D8] md:text-[18px] max-md:text-[12px] font-[400] md:leading-[130%] md:mt-[16px]'>{`Competition for every 15 days.  Account size 1000$, price only 50$. This offer is limited. No rule, No Drawdown limit Trade as you like for 15 days. 1st prize 1000$, 2nd 750$, 3rd 500$, 4th 250$, 5th 100$ and bonus accounts for all profitable traders) `}</p>
                <button onClick={PopupOpen} className='md:text-[20px] max-md:text-[12px] font-[600] md:leading-[24px] text-[#000] text-center md:w-[230px] max-md:w-[120px] md:h-[56px] max-md:h-[38px] bg-[#66D2EF] border border-[#66D2EF] hover:text-[#66D2EF] hover:bg-[#0B3B5C] md:rounded-[8px] max-md:rounded-[4px] md:mt-[30px] max-md:mt-[5px]'>Register Now</button> 
              </div> 
                </div>


                </div>

                <div data-aos="zoom-in"  className="live-acc bg-[#0B3B5C] rounded-[20px] border border-[#66D2EF] md:w-[90%] md:mx-auto md:pt-[30px] max-md:py-4 md:mt-[64px] max-md:mt-[32px] md:mb-[80px] max-md:rounded-[8px] max-md:mx-4 max-md:mb-[80px]">
                    <h1 className='text-[#66D2EF] md:text-[38px] max-md:text-[20px] font-[700] text-center md:leading-[130%] md:tracking-[-0.76px] '>Live Account</h1>
                    <p className='md:text-[16px] max-md:text-[14px] font-[400] md:leading-[150%] text-[#D8D8D8] text-center md:mt-[24px] max-md:mt-[12px]'>{`MetaFx presents you with the best ever live account environment So trade as you like`}</p>
                <div className="part flex items-center max-md:flex-col-reverse md:mx-[30px] md:mt-[34px] md:pb-[30px] max-md:pb-[15px] md:px-8 max-md:mt-[15px] max-md:px-4 md:gap-[16px] max-md:gap-[8px]">
               
              <div className="right-cont max-md:flex max-md:flex-col  max-md:items-center max-md:gap-2 md:w-[50%] md:px-[38px] md:py-[30px]">
              
                <h1 className='md:text-[24px] max-md:text-[18px] font-[600] md:leading-[130%] md:tracking-[-0.48px] md:items-stretch max-md:text-center'>Swap Free , lowest spread and no commission accounts for you because you win then we win  </h1>
                <p className=' max-md:text-justify text-[#D8D8D8] md:text-[18px] max-md:text-[12px] font-[400] md:leading-[130%] md:mt-[16px]'>{`MetaFx offers you the best trading environment so that you can trade and earn big profits. Because we care for you. `}</p>
                <button onClick={LivePopupOpen} className='md:text-[20px] max-md:text-[12px] font-[600] md:leading-[24px] text-[#000] text-center md:w-[230px] max-md:w-[120px] md:h-[56px] max-md:h-[38px] bg-[#66D2EF] border border-[#66D2EF] hover:text-[#66D2EF] hover:bg-[#0B3B5C] md:rounded-[8px] max-md:rounded-[4px] md:mt-[30px] max-md:mt-[5px]'>Get Now</button>
              </div>

              <div className="images max:md:mx-auto md:h-[380px] max-md:h-[250px] md:w-[455px] max-md:w-[250px] relative md:ml-[60px]">
                <img className='md:h-[341px] max-md:h-[230px] md:w-[400px] max-md:w-[230px] absolute top-0 left-0 z-10 rounded-[10px]' src="\images\bitmap1.png" alt="" />
                <img className='md:h-[341px] max-md:h-[230px] md:w-[397px] max-md:w-[230px] absolute right-0 bottom-0 opacity-[0.0986] rounded-[10px]' src="\images\bitmap-bg.png" alt="" />
              </div>
                </div>


                </div>
                <Footer/>
            </div>
    </div>
    </div>
  )
}

export default OurServicePage