import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GoBell } from "react-icons/go";
import axios from "axios"; // Import axios for API calls

export default function Layout({ children }) {
  const path = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const arr = [
    {
      name: 'Competition Account',
      link: '/admin'
    },
    {
      name: 'Live-account',
      link: '/admin/live-account'
    },
    {
      name: 'Top Performance',
      link: '/admin/top-performance'
    },
  ];

  // Check user role and redirect accordingly
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
      return;
    }

    const checkUserRole = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/auth/checkuser`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const { isAdmin } = response.data;

        if (!isAdmin) {
          router.push("/"); // Redirect to home if not admin
        } else {
          setLoading(false); // If admin, set loading to false and render admin page
        }
      } catch (error) {
        console.error("Error checking user role:", error);
        router.push("/"); // If any error, redirect to login
      }
    };

    checkUserRole();
  }, [router]);

  if (loading) {
    return <div className="h-screen w-screen bg-[#0B3B5C] flex justify-center items-center text-4xl text-white">Loading...</div>; // Show a loading state while fetching the role
  }
  const handleLogout = () => {
    localStorage.removeItem("token")
    router.push("/login")

  }

  return (
    <div className="grid grid-cols-11 text-white fixed w-full bg-[#0B3B5C]">
      <div className="col-span-2 border-r border-r-gray-500 min-h-screen w-full flex flex-col justify-between pb-10">
        <ul className="mt-20 p-2 grid gap-2 ">
          {arr.map((ele, i) => (
            <Link href={ele.link} key={i} className={`text-white hover:bg-primary-main p-3 px-5 cursor-pointer rounded-md ${path === ele.link ? "bg-primary-main" : ""}`}>
              {ele.name}
            </Link>
          ))}
        </ul>
        <button onClick={handleLogout} className="p-1 px-3 border border-primary-main w-fit rounded-md ml-4 cursor-pointer hover:bg-primary-main text-white">Logout</button>
      </div>
      <div className="col-span-9 min-h-screen w-full">
        <div className="p-6 bg-[#4D6B82] flex justify-end px-10">
          <div className="flex items-center gap-2">
            <GoBell className="text-2xl mr-2" />
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                src="/images/02.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold">Welcome</p>
              <p className="text-[10px] text-[#8E95A9]">Admin</p>
            </div>
          </div>
        </div>
        <div className="p-5 overflow-y-scroll max-h-[85vh]">
          {children}
        </div>
      </div>
    </div>
  );
}
