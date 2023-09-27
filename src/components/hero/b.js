import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const B = () => (
    <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
                <StaticImage
                    src="https://cdn.pixabay.com/photo/2017/03/06/21/08/maldives-2122547_1280.jpg"
                    alt="hero"
                    class="absolute inset-0 h-full w-full object-cover object-center"
                    imgClassName="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div class="absolute inset-0 bg-black opacity-70 mix-blend-multiply"></div>

                <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
                    <p class="mb-4 text-center text-lg text-white sm:text-xl md:mb-8">
                        Very proud to introduce
                    </p>
                    <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
                        Revolutionary way to build the web
                    </h1>

                    <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                        <a
                            href="#"
                            class="inline-block rounded-lg bg-blue-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-blue-300 transition duration-100 hover:bg-blue-700 focus-visible:ring active:bg-blue-700 md:text-base"
                        >
                            Start now
                        </a>

                        <a
                            href="#"
                            class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-blue-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                        >
                            Take tour
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </div>
);

export default B;
