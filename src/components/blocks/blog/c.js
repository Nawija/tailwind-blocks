import React from "react";
import { Link } from "gatsby";

const B = () => (
    <section class="text-gray-800">
        <div class="container px-5 lg:px-12 py-24 mx-auto">
            <div class="flex flex-wrap -mx-4 -my-8">
                <div class="py-8 px-4 lg:w-1/3">
                    <div class="h-full flex items-start">
                        <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                            <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                                Jul
                            </span>
                            <span class="font-medium text-lg text-gray-800  leading-none">
                                18
                            </span>
                        </div>
                        <div class="flex-grow pl-6">
                            <p class="tracking-widest text-xs  font-medium text-blue-500 mb-1">
                                CATEGORY
                            </p>
                            <p class=" text-xl font-medium text-gray-900 mb-3">
                                The 400 Blows
                            </p>
                            <p class="leading-relaxed mb-5">
                                Photo booth fam kinfolk cold-pressed sriracha
                                leggings jianbing microdosing tousled waistcoat.
                            </p>
                            <Link class="inline-flex items-center">
                                <img
                                    alt="blog"
                                    src="https://dummyimage.com/103x103"
                                    class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                                />
                                <span class="flex-grow flex flex-col pl-3">
                                    <span class=" font-medium text-gray-900">
                                        Alper Kamu
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="py-8 px-4 lg:w-1/3">
                    <div class="h-full flex items-start">
                        <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                            <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                                Jul
                            </span>
                            <span class="font-medium text-lg text-gray-800  leading-none">
                                18
                            </span>
                        </div>
                        <div class="flex-grow pl-6">
                            <p class="tracking-widest text-xs title-font font-medium text-blue-500 mb-1">
                                CATEGORY
                            </p>
                            <p class="title-font text-xl font-medium text-gray-900 mb-3">
                                Shooting Stars
                            </p>
                            <p class="leading-relaxed mb-5">
                                Photo booth fam kinfolk cold-pressed sriracha
                                leggings jianbing microdosing tousled waistcoat.
                            </p>
                            <Link class="inline-flex items-center">
                                <img
                                    alt="blog"
                                    src="https://dummyimage.com/102x102"
                                    class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                                />
                                <span class="flex-grow flex flex-col pl-3">
                                    <span class="title-font font-medium text-gray-900">
                                        Holden Caulfield
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="py-8 px-4 lg:w-1/3">
                    <div class="h-full flex items-start">
                        <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                            <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                                Jul
                            </span>
                            <span class="font-medium text-lg text-gray-800 title-font leading-none">
                                18
                            </span>
                        </div>
                        <div class="flex-grow pl-6">
                            <p class="tracking-widest text-xs  font-medium text-blue-500 mb-1">
                                CATEGORY
                            </p>
                            <h2 class=" text-xl font-medium text-gray-900 mb-3">
                                Neptune
                            </h2>
                            <p class="leading-relaxed mb-5">
                                Photo booth fam kinfolk cold-pressed sriracha
                                leggings jianbing microdosing tousled waistcoat.
                            </p>
                            <Link class="inline-flex items-center">
                                <img
                                    alt="blog"
                                    src="https://dummyimage.com/101x101"
                                    class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                                />
                                <span class="flex-grow flex flex-col pl-3">
                                    <span class=" font-medium text-gray-900">
                                        Henry Letham
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default B;