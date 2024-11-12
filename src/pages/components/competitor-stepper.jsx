import React from 'react'
import { SiTicktick } from "react-icons/si";

export default function CompetitorStepper() {
  return (
      <ol className="flex items-center w-full">
        <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800 ">
            <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-10 lg:w-10 dark:bg-blue-800 shrink-0">
            <SiTicktick />
            </span>
        </li>
        <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700 ">
            <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-10 lg:w-10 dark:bg-gray-700 shrink-0">
            <SiTicktick />
            </span>
        </li>
        <li className="flex items-center w-fit">
            <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-10 lg:w-10 dark:bg-gray-700 shrink-0">
            <SiTicktick />
            </span>
        </li>
    </ol>

  )
}
