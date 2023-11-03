import React from "react";
import { Link } from "gatsby";

const D = () => (
    <div class="bg-white py-12 px-5">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div class="flex overflow-hidden rounded-lg bg-gray-100">
                <div class="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&q=75&fit=crop&w=750"
                        alt="Photo by mymind"
                        class="absolute inset-0 h-full w-full object-cover object-center"
                    />
                </div>

                <div class="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
                    <div class="flex w-full flex-col items-center sm:block">
                        <div class="mb-4 sm:mb-8">
                            <h2 class="text-center text-xl font-bold text-blue-600 sm:text-left sm:text-2xl lg:text-3xl">
                                Get the latest updates
                            </h2>
                            <p class="text-center text-gray-500 sm:text-left">
                                Sign up for our newsletter
                            </p>
                        </div>

                        <form class="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
                            <input
                                placeholder="Email"
                                class="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-blue-300 transition duration-100 focus:ring"
                            />

                            <button class="inline-block rounded bg-blue-600 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-blue-300 transition duration-100 hover:bg-blue-700 focus-visible:ring active:bg-blue-800 md:text-base">
                                Send
                            </button>
                        </form>

                        <p class="text-center text-xs text-gray-400 sm:text-left">
                            By signing up to our newsletter you agree to our{" "}
                            <Link class="underline transition duration-100 hover:text-blue-500 active:text-blue-600">
                                Term of Service
                            </Link>{" "}
                            and{" "}
                            <Link class="underline transition duration-100 hover:text-blue-500 active:text-blue-600">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default D;