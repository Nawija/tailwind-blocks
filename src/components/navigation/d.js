import React from "react";
import { Link } from "gatsby";

const D = () => (
    <header class="text-gray-800 flex items-center justify-between p-5 max-w-screen-2xl mx-auto">
        <Link class="flex flex-col lg:px-20 font-medium lg:font-semibold lg:hidden items-center justify-center text-gray-900 hover:scale-110 transition-transform duration-300">
            <svg
                class="w-8 h-8 lg:w-10 lg:h-10 p-2 text-white rounded bg-blue-600"
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
            <span class="text-[12px]">TailwindBlock</span>
        </Link>
        <button
            aria-label="Menu"
            class="lg:hidden bg-gray-100 p-2.5 z-50 rounded-lg "
        >
            <div class="w-2 h-0.5 m-1 rounded-lg bg-blue-600" />
            <div class="w-3 h-0.5 m-1 rounded-lg bg-blue-600" />
            <div class="w-4 h-0.5 m-1 rounded-lg bg-blue-600" />
        </button>
        <nav class="hidden lg:flex items-center text-base justify-center w-full">
            <Link class="hover:text-blue-600 font-medium p-2 mr-5 transition-colors">
                First Link
            </Link>

            <Link class="mr-5 hover:text-blue-600 font-medium p-2 transition-colors">
                Second Link
            </Link>

            <Link class="flex flex-col px-20 font-bold items-center justify-center text-gray-900 hover:scale-110 transition-transform duration-300">
                <svg
                    class="w-10 h-10 p-2 text-white rounded bg-blue-600"
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
                <span class="ml-1 ">TailwindBlock</span>
            </Link>

            <Link class="mr-5 hover:text-blue-600 font-medium p-2 transition-colors">
                Third Link
            </Link>
            <Link class="mr-5 hover:text-blue-600 font-medium p-2 transition-colors">
                Fourth Link
            </Link>
        </nav>
    </header>
);

export default D;
