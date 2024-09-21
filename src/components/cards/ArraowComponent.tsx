"use client"

import { FaArrowRight } from "react-icons/fa";
export default function ArrowComonent() { 
    return (
        <div className="mr-2">
            <button className="flex items-center justify-center p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none shadow-md hover:shadow-lg transition-shadow duration-300"> 
                <FaArrowRight />
            </button>
        </div>
    )
}