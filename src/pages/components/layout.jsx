/* eslint-disable @next/next/no-img-element */
import React , { useEffect } from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { useRouter } from 'next/navigation'

const Layout = ({children}) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);
  return (
   <div className='h-full w-full md:relative'>
    <div 
      className="absolute h-full w-full bg-repeat opacity-[1]"
      style={{ 
        backgroundImage: 'url("/images/image18.png")',
        backgroundSize: 'contain', // Adjust to your desired size ('cover' or 'auto' can also be used)
      }}
    >
    </div>

    <div className="md:w-[90%] max-md:w-full md:mx-auto bg-[#7A97AD] text-white  md:top-0 relative z-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
   </div>
  )
}


export default Layout
