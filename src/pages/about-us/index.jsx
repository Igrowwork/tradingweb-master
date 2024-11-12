/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../components/navbar";
import Whoweare from "../components/who-we-are";
import Footer from "../components/footer";
import { IoCheckmarkCircle } from "react-icons/io5";
import JoinusTwo from "../components/joinustwo";

const index = () => {
  return (  
    <div className=" w-full md:relative md:mx:auto">
      <img className='h-[100vh] w-full max-md:hidden' src="/images/image18.png" alt="" />
      <img className='h-[100vh] w-full max-md:hidden' src="/images/image18.png" alt="" />
      <img className='h-[82.4vh] w-full max-md:hidden' src="/images/image18.png" alt="" />

        <div className="md:w-[90%] max-md:w-full bg-[#7A97AD] text-white md:absolute md:top-0 md:left-[5%] ">
      <Navbar />
      <div className="max-md:w-[90%] max-md:mb-[160px] md:mt-[40px] max-md:pt-[20px] md:mx-4 max-md:mx-auto">
      <div className="page3 md:mx-auto md:h-[1067px] w-full md:rounded-b-[42px] max-md:rounded-b-[24px] border-y-[1px] border-[#66D2EF] bg-[#0B3B5C] md:px-12 max-md:pb-[100px] md:pt-[40px] max-md:pt-[15px] relative">
        <div className="bg-primary-main md:h-80 md:w-80 rounded-full absolute -right-10 bottom-[10%]" style={{filter:"blur(136.3035430908203px"}} />
        <h1 data-aos="zoom-in" className="text-[#66D2EF] md:text-[38px] max-md:text-[20px] font-[700] md:leading-[130%] md:tracking-[-0.76px] text-center">
          Who we are
        </h1>
        <p data-aos="zoom-in" className="text-[#D8D8D8] md:text-[16px] max-md:text-[12px] font-[400] md:leading-[150%] text-center md:mt-[16px] max-md:mt-[8px] max-md:px-4">
        Metafx is in the Market to serve you with the best live and funded accounts with best trading environment
        </p>
        <div className="md:mt-[30px] max-md:mt-[15px] max-md:px-4 flex max-md:flex-col items-center md:gap-[60px] relative max-md:gap-[15px] z-20">
        
          <div className="left-content ">
            <div className="images md:h-[610px] max-md:h-[300px] md:w-[460px] max-md:w-[290px] relative">
              <img
                className="lg:h-[547px] max-md:h-[270px] md:w-[400px] max-md:w-[260px] absolute top-0 left-0 z-10 rounded-[10px]"
                src="\images\bitmap1.png"
                alt=""
                 data-aos="zoom-out-right"
              />
              <img
                className="md:h-[547px] max-md:h-[270px] md:w-[397px] max-md:w-[260px] absolute right-0 bottom-0 opacity-[0.0986] rounded-[10px] "
                src="\images\bitmap-bg.png"
                alt=""
                 data-aos="zoom-out"
              />
            </div>
          </div>

          <div className="right-content max-md:ml-4">
            <h1 data-aos="fade-in" className=" max-md:w-[80%] md:text-[24px] max-md:text-[20px] font-[600] md:leading-[130%] md:tracking-[-0.48px] md:mb-[8px] max-md:mb-[4px]">
            Trade Smart, Win Big with MetaFX 
            </h1>
            <p data-aos="fade-in" className="md:text-[16px] max-md:text-[12px] font-[400] md:leading-[130%] lg:w-[540px]  text-[#D8D8D8]">
            Metafx operates across the World for Funded Challenges and live account to provide our clients with reliable and intuitive access to financial opportunities
            </p>
            <div data-aos="zoom-left" className="row flex flex-col max-lg:items-center lg:gap-[38px] max-lg:gap-[24px] max-lg:[20px] lg:mt-[40px] max-lg:mt-[16px]">
              <div className="row-1 flex items-center lg:gap-[20px] max-lg:gap-[12px]">
                <IoCheckmarkCircle className="lg:text-[42px] max-lg:text-[80px] text-[#66D2EF]" />

                <div className="flex flex-col lg:gap-[16px] max-lg:gap-[5px]">
                  {/* <h1 className="lg:text-[24px] max-lg:text-[20px] font-[600] lg:leading-[130%] lg:tracking-[-0.48px]">
                    Accounting by the Book
                  </h1> */}
                  <p className="lg:w-[80%] lg:text-[16px] max-lg:text-[12px] font-[400] lg:leading-[130%] text-[#D8D8D8]">
                  Get 1000$ account for Just 50$ & Description The best Funded Competition account Ever with no trading rules 
                  </p>
                </div>
              </div>
              <div className="row-2 flex items-center lg:gap-[20px] max-lg:gap-[12px]">
              <IoCheckmarkCircle className="lg:text-[42px] max-lg:text-[80px] text-[#66D2EF]" />


                <div className="flex flex-col lg:gap-[16px] max-lg:gap-[5px]">
                  {/* <h1 className="lg:text-[24px] max-lg:text-[20px] font-[600] lg:leading-[130%] lg:tracking-[-0.48px]">
                    Accounting by the Book
                  </h1> */}
                  <p className="lg:w-[80%] lg:text-[16px] max-lg:text-[12px] font-[400] lg:leading-[130%] text-[#D8D8D8]">
                  Lowest spread live account & Description, What do you need as a trader the best spread yes we are here for you with just 15-20 per lot on Gold
                  </p>
                </div>
              </div>
              <div className="row-3 flex items-center lg:gap-[20px] max-lg:gap-[12px]">
              <IoCheckmarkCircle className="lg:text-[42px] max-lg:text-[80px] text-[#66D2EF]" />

                <div className="flex flex-col lg:gap-[16px] max-lg:gap-[5px]">
                  {/* <h1 className="lg:text-[24px] max-lg:text-[20px] font-[600] lg:leading-[130%] lg:tracking-[-0.48px]">
                    Accounting by the Book
                  </h1> */}
                  <p className="lg:w-[80%] lg:text-[16px] max-lg:text-[12px] font-[400] lg:leading-[130%] text-[#D8D8D8]">
                  Swap free is your need , & Description. If you are long Trades holder and swap hurts you try us we will give you the best swap free accounts  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-full max-md:w-full absolute lg:left-0 lg:-bottom-[120px] max-lg:-bottom-[120px]"  data-aos="zoom-in">
          <JoinusTwo />
        </div>
      </div>
      </div>
      <div className="w-full h-full md:pt-[212px]">
      <Footer />
      </div>
    </div>
    </div>
   
  );
};

export default index;
