import React from "react";
import { Link } from "gatsby";

const B = () => (
    <header class="text-gray-800 flex items-center justify-between p-5">
            <Link to="#" class="flex font-bold items-center justify-center text-gray-900">
                <svg
                    class="w-10 h-10 p-2 bg-black text-white rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                </svg>
                <span class="ml-1">TailwindBlock</span>
            </Link>
            <button
                aria-label="Menu"
                class="lg:hidden bg-gray-100 border p-2.5 z-50 rounded-lg "
            >
                <div class="w-4 h-0.5 m-1 rounded-lg bg-black" />
                <div class="w-4 h-0.5 m-1 rounded-lg bg-black" />
                <div class="w-4 h-0.5 m-1 rounded-lg bg-black" />
            </button>
            <nav class="hidden lg:flex items-center text-base justify-center">
                <Link to="#" class="mr-3 hover:text-black hover:border-black font-medium duration-300 delay-75 p-3 border-b-2 border-transparent transition-colors">
                    First Link
                </Link>
                <Link to="#" class="mr-3 hover:text-black hover:border-black font-medium duration-300 delay-75 p-3 border-b-2 border-transparent transition-colors">
                    Second Link
                </Link>
                <Link to="#" class="mr-3 hover:text-black hover:border-black font-medium duration-300 delay-75 p-3 border-b-2 border-transparent transition-colors">
                    Third Link
                </Link>
                <Link to="#" class="mr-3 hover:text-black hover:border-black font-medium duration-300 delay-75 p-3 border-b-2 border-transparent transition-colors">
                    Fourth Link
                </Link>
            </nav>
    </header>
);

export default B;
