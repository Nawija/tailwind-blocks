import React from "react";

const J = () => (
    <button class="bg-gradient-to-t from-blue-200 via-white duration-300 to-gray-100 font-medium rounded-full transition-all py-2 m-2 group px-2 hover:pr-14 border relative overflow-hidden border-blue-500 text-blue-700">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>

        <p class="absolute left-10 text-sm top-1/2 transition-transform -translate-y-1/2 translate-x-full group-hover:translate-x-0">
            Menu
        </p>
    </button>
);

export default J;
