import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState , useContext } from 'react';
import { RxCross2 } from "react-icons/rx";
import { RouteContext } from '../../../context/context';

const MobileDrawer = () => {
    const path = usePathname()
    const { isDrawer , DrawerClose } = useContext(RouteContext)
  const arr = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Our Services",
      link: "/our-services",
    },
    {
      name: "About us",
      link: "/about-us",
    },
    {
      name: "Contact us",
      link: "/contact-us",
    },
  ];

  return (
    <div
    className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-64 dark:bg-secondary-main shadow-2xl ${
        isDrawer ? 'translate-x-0' : 'translate-x-full'
    }`}
    tabIndex={-1}
    aria-labelledby="drawer-right-label"
    >
    <h5
        id="drawer-right-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-white"
    >
    
    <div className="h-full flex justify-center items-center">
            <Link href="/" >
              <h1 className='md:text-[40px] max-md:text-[30px]  text-primary-main '>Meta <b className='text-[#FFF]'>FX</b> </h1>
            </Link>
          </div>
    </h5>
    <button
        type="button"
        onClick={DrawerClose}
        aria-controls="drawer-right-example"
        className="text-gray-400 hover:text-gray-900 rounded-lg  w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center p-2 dark:hover:text-primary-main"
    >
        <RxCross2 className='text-[30px]'/>
        <span className="sr-only">Close menu</span>
    </button>
    {/* <p>Login</p> */}
    <p className="mb-6 text-gray-500 dark:text-gray-400 grid gap-3 text-md mt-6">
        {
            arr.map((ele,i) => (
                <Link key={i} href={ele.link} className={`${path === ele.link ? "text-primary-main font-medium"  : "text-[#D7D7D7]"}`} onClick={DrawerClose}>{ele.name}</Link>
            ))
        }
    </p>
    
    </div>
  );
};

export default MobileDrawer;
