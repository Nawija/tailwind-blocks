import React from "react";

const E = () => (
    <button class="bg-gradient-to-br from-violet-500 to-violet-800 font-medium rounded-xl text-white hover:shadow-xl shadow-lg shadow-violet-500/70 transition-all py-2 px-3 hover:px-5 m-2 group relative overflow-hidden">
        <div class="flex items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 mr-2 -translate-x-[200%] transition-transform group-hover:translate-x-0"
            >
                <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>

            <p class="-translate-x-3.5 group-hover:translate-x-0 transition-transform">
                Button
            </p>
        </div>
    </button>
);

export default E;
