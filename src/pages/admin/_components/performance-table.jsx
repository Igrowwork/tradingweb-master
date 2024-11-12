import React, { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import axios from "axios";
import { CiMenuKebab } from "react-icons/ci";
import Link from "next/link";
import { MdDelete } from "react-icons/md";

const PerformanceTable = () => {
  const arr = ["", "", "", "", "", "", ""];
  const [data, setData] = useState([]);

  const isFetch = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/topperformance`);
      // console.log(res.data.val, "Fetched Data");
      setData(res.data.val);
    } catch (error) {
      console.error(error, "Error fetching data");
    }
  };

  useEffect(() => {
    isFetch();
  }, []);
  const handleDelete =  async (id) => {
    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_URL}/api/topperformance/${id}`);
      console.log(res.data.val, "Data");
      setData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.error(error, "Error fetching data");
    }
  }
  return (
    <div className="">
      <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4 pr-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
            <MdSearch />
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#4D6B82] outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
        <Link href="/admin/top-performance/add-performance" className="block p-2 px-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#4D6B82] outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          + Add 
        </Link>
      </div>
      <div className="bg-[#4D6B82] p-8 rounded-2xl">
        <h1 className="text-white text-xl font-medium">Top Performance</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-sm text-gray-700  bg-gray-50 dark:bg-secondary-main dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="">
              {data.map((ele, i) => (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-[#4D6B82] dark:border-white hover:bg-gray-50 dark:hover:bg-secondary-main/50"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {ele.name}
                  </th>
                  <td className="px-6 py-4">{ele.description}</td>
                  <td className="px-6 py-4">{ele.createdAt}</td>
                  <td className="px-6 py-4 flex text-lg gap-4">
                    <p onClick={() => handleDelete(ele?._id)}><MdDelete /></p>
                    <Link href={`/admin/top-performance/${ele._id}`}><CiMenuKebab /></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTable;
