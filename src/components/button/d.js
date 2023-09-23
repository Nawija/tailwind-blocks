import React from "react";

const D = () => (
    <button class="bg-gradient-to-br from-black to-slate-500 font-medium rounded-xl border text-white hover:shadow-xl shadow-lg transition-all duration-300 py-2 px-5 m-2 group relative overflow-hidden">
        <div class="flex items-center justify-center group-hover:-translate-x-2 transition-transform">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 mr-2 animate-spin"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
            </svg>

            <p>
                Button
            </p>
        </div>
    </button>
);

export default D;
