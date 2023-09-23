import React from "react";

const C = () => (
    <header class="text-gray-800 flex items-center justify-between p-5 max-w-screen-2xl mx-auto">
        <button
            aria-label="Menu"
            class="lg:hidden bg-gray-100 p-2.5 z-50 rounded-lg "
        >
            <div class="w-4 h-0.5 m-1 rounded-lg bg-blue-600" />
            <div class="w-3 h-0.5 m-1 rounded-lg bg-blue-600" />
            <div class="w-2 h-0.5 m-1 rounded-lg bg-blue-600" />
        </button>
        <nav class="hidden lg:flex items-center text-base justify-around w-full">
            <div>
                <a
                    href="#"
                    class="hover:text-blue-600 font-medium p-2 mr-5 transition-colors"
                >
                    First Link
                </a>

                <a
                    href="#"
                    class="mr-5 hover:text-blue-600 font-medium p-2 transition-colors"
                >
                    Second Link
                </a>
            </div>

            <a
                href="#"
                class="flex font-medium items-center justify-center text-gray-900 hover:scale-110 transition-transform duration-300"
            >
                <svg
                    class="w-9 h-9 p-2 text-white rounded bg-blue-600"
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
            </a>

            <div>
                <a
                    href="#"
                    class="mr-5 hover:text-blue-600 font-medium p-2 transition-colors"
                >
                    Third Link
                </a>
                <a
                    href="#"
                    class="mr-5 hover:text-blue-600 font-medium p-2 transition-colors"
                >
                    Fourth Link
                </a>
            </div>
        </nav>
    </header>
);

export default C;
