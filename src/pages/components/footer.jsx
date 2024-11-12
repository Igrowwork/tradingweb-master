import Link from 'next/link'
import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { AiFillFacebook } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
import { MdEmail } from "react-icons/md";


const Footer = () => {
    return (
        <div>
            <footer data-aos="fade-up" className='footer page-() w-full h-full bg-secondary-main md:py-[30px] md:px-[40px] flex flex-col justify-between items-start max-md:py-4 max-md:px-4'>
                <div className="w-full h-full flex max-md:flex-col justify-between items-start md:mb-[30px] max-md:gap-[16px] ">
                    <div className="col-1 flex flex-col md:gap-[10px] max-md:gap-[10px] items-start">
                        <div className="h-full flex justify-center items-center max-md:mx-auto">
                           
                            <Link href="/" >
                            <h1 className='md:text-[34px] max-md:text-[26px] text-primary-main '>Meta <b className='text-[#FFF]'>FX</b> </h1>
                            </Link>
                        </div>
                        <div className="create-landing flex flex-col md:gap-[24px] max-md:gap-[10px] max-md:text-center">
                            <h1 className='font-[700] md:text-[28px] max-md:text-[18px] text-[#FFF] md:w-[340px]'>Your Path To The trading World With MetaFX will Make you Big</h1>
                            <p className='font-[400] md:text-[21px] max-md:text-[12px] max-md:px-8 text-[#FFF] md:w-[390px]'>All in one The best Funded Account and The lowest spread live Broker account</p>
                        </div>
                    </div>
                    <div className="col-23 max-md:w-[100%] flex max-md:justify-between items-start md:mb-[30px] md:gap-[210px] max-md:px-2 max-md:py-4">
                        <div className="col-2 flex flex-col md:gap-[24px] max-md:gap-[10px]">
                            <h2 className='text-primary-main font-[600] md:text-[24px] max-md:text-[16px]'>Menu</h2>
                            <div className="menu-cont flex flex-col items-left md:gap-[12px] max-md:gap-[6px]">
                                <Link href='/' className='md:text-[18px] max-md:text-[12px] font-[400] text-[#FFF] hover:text-primary-main'>Home</Link>
                                <Link href='/our-services' className='md:text-[18px] max-md:text-[12px] font-[400] text-[#FFF] hover:text-primary-main'>Our Services</Link>
                                <Link href='/about-us' className='md:text-[18px] max-md:text-[12px] font-[400] text-[#FFF] hover:text-primary-main'>About Us</Link>
                                <Link href='/contact-us' className='md:text-[18px] max-md:text-[12px] font-[400] text-[#FFF] hover:text-primary-main'>Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-3 flex flex-col md:gap-[24px] max-md:gap-[10px]">
                            <h2 className='text-primary-main font-[600] md:text-[24px] max-md:text-[16px]'>Join Our Announcement group</h2>
                            <div className="contact-col flex flex-col md:gap-[20px] max-md:gap-[10px]">
                                <Link href="https://t.me/Metafx_broker" className='flex items-center md:gap-[12px] max-md:gap-[6px]'>
                                <SiTelegram className="md:text-[24px] text-[#FFF] max-md:text-[20px]" />
                                    <p className='md:text-[16px]  hover:text-primary-main max-md:text-[12px]  font-[400] text-[#FFF]'>@Metafx_broker</p>
                                </Link>
                               
                               
                            </div>
                            <div className="contact-col flex flex-col md:gap-[20px] max-md:gap-[10px]">
                                <Link href="https://t.me/MetaFxAnnouncements" className='flex items-center md:gap-[12px] max-md:gap-[6px]'>
                                <SiTelegram className="md:text-[24px] text-[#FFF] max-md:text-[20px]" />
                                    <p className='md:text-[16px]  hover:text-primary-main max-md:text-[12px]  font-[400] text-[#FFF]'>@MetaFx Announcements</p>
                                </Link>
                               
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-primary-main max-md:mt-2'></div>
                <div className="copywrite h-full w-full flex items-center justify-center md:mt-[30px] max-md:mt-[10px]">
                    <p className='font-[400] md:text-[16px] max-md:text-[8px] text-[#FFF] text-center'>© 2024 Copyright, All Right Reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer