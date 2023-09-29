import React from "react";

const I = () => (
    <button class="bg-gradient-to-bl from-yellow-400 to-yellow-600 font-medium rounded-xl text-white hover:shadow-lg shadow-lg shadow-amber-500/70 hover:shadow-amber-600/70 transition-all py-2 px-3 m-2 group relative overflow-hidden">
        <div class="flex items-center justify-center">
            <p class="translate-x-3.5 group-hover:translate-x-2 transition-transform">
                Button
            </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 ml-2 translate-x-[200%] transition-transform
            group-hover:translate-x-0"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
            </svg>
        </div>
    </button>
);

export default I;