import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdSearch } from "react-icons/md";
import Link from "next/link";

const CometitorTable = () => {
    const [isData, setIsData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const isFetch = async () => {
      try {
        // Retrieve the token from local storage
        const token = localStorage.getItem("token"); // Adjust the key as necessary
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/admin/competitors`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        // console.log(res.data, "Fetched Data");
        setIsData(res.data);
      } catch (error) {
        console.error(error, "Error fetching data");
      }
    };
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }
    const FilterData = isData.filter((ele) =>
        ele.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ele.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ele.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ele.transactionId.toLowerCase().includes(searchTerm.toLowerCase())
    )
  
    useEffect(() => {
      isFetch();
    }, []);

    return (
        <div className="">
           
           <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                <label htmlFor="table-search" className="sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                        <MdSearch />
                    </div>
                    <input
                        type="text"
                        id="table-search"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#4D6B82] outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for name, email, or transaction ID"
                    />
                </div>
            </div>
            <div className="bg-[#4D6B82] p-8 rounded-2xl">
                <h1 className="text-white text-xl font-medium">Competitor Account</h1>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-sm text-gray-700  bg-gray-50 dark:bg-secondary-main dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">S.no.</th>
                                <th scope="col" className="px-6 py-3">Customer Name</th>
                                <th scope="col" className="px-6 py-3">Email</th>
                                <th scope="col" className="px-6 py-3">Phone no</th>
                                <th scope="col" className="px-6 py-3">Date Slot</th>
                                <th scope="col" className="px-6 py-3">Transaction I’d</th>
                                <th scope="col" className="px-6 py-3">Amount</th>
                                <th scope="col" className="px-6 py-3">Document</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {FilterData.map((ele, i) => (
                                <tr key={i} className="bg-white border-b dark:bg-[#4D6B82] dark:border-white hover:bg-gray-50 dark:hover:bg-secondary-main/50">
                                    <td className="px-6 py-4">{i + 1}</td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {ele.name}
                                    </th>
                                    <td className="px-6 py-4">{ele.email}</td>
                                    <td className="px-6 py-4">{ele.number}</td>
                                    <td className="px-6 py-4">{ele.dateRange}</td>
                                    <td className="px-6 py-4">{ele.transactionId}</td>
                                    <td className="px-6 py-4">{ele.amount}</td>
                                    <td className="px-6 py-4">
                                        <a href={ele.imageFront.imageUrl} target="_blank" download className="text-blue-500 underline text-center hover:text-red-500">
                                            view
                                        </a>
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

export default CometitorTable;
