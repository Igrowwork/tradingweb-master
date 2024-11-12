/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect, useContext } from "react";
import { RouteContext } from "../../../context/context";
import { LuLoader2 } from "react-icons/lu";
import MobileDrawer from "./mobile-drawer";
import { IoMenuSharp } from "react-icons/io5";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
// import axiosInstance from "@/utils/axiosInstance";

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {  DrawerOpen} = useContext(RouteContext)
  const [isVal, setIsVal] = useState("")
  const [isLoading, setIsLoading] = useState(false);


  
  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    router.push("/login")

  }
  const path = usePathname();
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
    <div>

      <div className="h-full w-full ">
        <nav className="md:w-full md:py-5 md:px-[40px] max-md:py-4 max-md:px-4 flex justify-between items-center cursor-default z-20 bg-[#0B3B5C]">
          <div className="h-full flex justify-center items-center"    data-aos="flip-up" data-aos-duration="1000">
            <Link href="/" >
              <h1 className='md:text-[50px] max-md:text-[30px]  text-primary-main '>Meta <b className='text-[#FFF]'>FX</b> </h1>
            </Link>
          </div>
          <div className="navbar md:h-full max-md:hidden flex justify-evenly items-center gap-[35.5px]"  data-aos="flip-up"  data-aos-duration="1000">
            {arr.map((ele, i) => (
              <Link
                href={ele.link}
                key={i}
                className={`font-[500] hover:font-[600] text-[18px]  text-center hover:text-primary-main ${path === ele.link
                    ? "text-primary-main font-medium"
                    : "text-[#D7D7D7]"
                  }`}
              >
                {ele.name}
              </Link>
            ))}
          </div>
          <div onClick={handleLogout} className="border border-[#76D7F1] text-sm text-[#7AD8F1] hover:text-[#0b3b5cb3] hover:bg-[#7AD8F1] rounded-md flex items-center gap-2 cursor-pointer px-4 py-2">
                  LogOut
                </div>

          <div className="md:hidden">
            <button
              className="text-xl"
              type="button"
              onClick={DrawerOpen}
            >
              <IoMenuSharp className="text-[30px] text-[#FFF]" />
            </button>
            <MobileDrawer />

          </div>
        </nav>
      </div>
    </div>


  );
};

export default Navbar;
