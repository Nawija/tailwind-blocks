import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const B = () => (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                <div class="flex items-center gap-12">
                    <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">
                        Gallery
                    </h2>

                    <p class="hidden max-w-screen-sm text-gray-600 md:block">
                        This is a section of some simple filler text, also known
                        as placeholder text. It shares some characteristics of a
                        real written text.
                    </p>
                </div>

                <a
                    href="#"
                    class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-800 outline-none ring-blue-400 transition-colors hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
                >
                    Button
                </a>
            </div>

            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                <a
                    href="#"
                    class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                    <img
                        src="https://cdn.pixabay.com/photo/2013/10/28/22/44/ocean-202074_1280.jpg"
                        alt="gallery"
                        class="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />

                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>

                    <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                        Tailwind
                    </span>
                </a>

                <a
                    href="#"
                    class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                    <img
                        src="https://cdn.pixabay.com/photo/2018/03/14/21/45/sunset-3226467_1280.jpg"
                        alt="gallery"
                        class="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />

                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>

                    <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                        Picture
                    </span>
                </a>

                <a
                    href="#"
                    class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                    <img
                        src="https://cdn.pixabay.com/photo/2017/03/13/20/13/fish-2141022_1280.jpg"
                        alt="gallery"
                        class="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />

                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>

                    <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                        Gallery
                    </span>
                </a>

                <a
                    href="#"
                    class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                    <img
                        src="https://cdn.pixabay.com/photo/2015/10/23/11/10/sea-1002804_1280.jpg"
                        alt="gallery"
                        class="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />

                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>

                    <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                        Photo
                    </span>
                </a>
            </div>
        </div>
    </div>
);

export default B;
