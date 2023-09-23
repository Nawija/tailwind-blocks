import React from "react";

const B = () => (
    <section class="text-gray-800">
        <div class="container px-5 lg:px-12 py-24 mx-auto flex flex-wrap items-center">
            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h2 class="title-font font-medium text-3xl text-gray-900">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h2>
                <p class="leading-relaxed mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                </p>
            </div>
            <div class="lg:w-2/6 md:w-1/2 bg-gray-100 border rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <p class="text-gray-900 text-lg font-medium title-font mb-5">
                    Sign Up
                </p>
                <div class="relative mb-4">
                    <label
                        for="full-name"
                        class="leading-7 text-sm text-gray-600"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        class="w-full bg-white rounded border border-gray-300 focus:border-blue-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        class="w-full bg-white rounded border border-gray-300 focus:border-blue-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <button class="text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">
                    Button
                </button>
                <p class="text-xs text-gray-500 mt-3">
                    Literally you probably haven't heard of them jean shorts.
                </p>
            </div>
        </div>
    </section>
);

export default B;
