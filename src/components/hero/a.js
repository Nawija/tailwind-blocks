import React from "react";

const A = () => (
    <section class="text-gray-800">
        <div class="mx-auto flex px-2 lg:px-12 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Lorem ipsum dolor sit amet
                    <br class="hidden lg:inline-block" />
                    consectetur adipiscing
                </h1>
                <p class="mb-8 leading-relaxed px-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                </p>
                <div class="flex justify-center">
                    <button class="inline-flex text-white bg-blue-600 border py-2 px-6 hover:bg-blue-700 transition-colors rounded text-lg">
                        Button
                    </button>
                    <button class="ml-4 inline-flex bg-gray-100 border py-2 px-6 hover:bg-slate-200 transition-colors rounded text-lg">
                        Button
                    </button>
                </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-96">
                <img
                    class="object-cover object-center rounded-lg w-full h-full"
                    alt="hero tailwind blocks"
                    src="https://source.unsplash.com/random/900×700/?fruit"
                />
            </div>
        </div>
    </section>
);

export default A;
