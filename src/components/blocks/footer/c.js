import React from "react";
import { Link } from "gatsby";

const LinkStyle = "hover:text-white transition-colors w-max cursor-pointer";

const C = () => (
    <footer class="bg-black p-4 items-center">
        <div class="space-y-9 grid grid-cols-1 md:grid-cols-2 pl-20 py-6 md:pl-24 md:pr-16 lg:grid-cols-4 lg:px-7 xl:px-14 xl:ml-16">
            <div class="text-[#6d6d6d] font-[650] text-[16px] leading-7">
                <div class="flex justify-start md:mt-10">
                    <p class="text-white pb-[36px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                        Information
                    </p>
                </div>
                <p className={LinkStyle}>Registration Start Date</p>
                <p className={LinkStyle}>Registration End Date</p>
                <p className={LinkStyle}>Exam Last Date </p>
            </div>
            <div class="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide md:">
                <div>
                    <pre class="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                        dates &nbsp;
                    </pre>
                </div>
                <p className={LinkStyle}>23 Dec 2021</p>
                <p className={LinkStyle}>30 May 2022</p>
                <p className={LinkStyle}>23 Dec 2021 to 31 May 2022</p>
            </div>
            <div class="md:flex flex-col justify-between">
                <div class="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide">
                    <div class="flex flex-col justify-start">
                        <p class="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                            About
                        </p>
                        <Link className={LinkStyle}>Apply</Link>
                        <Link className={LinkStyle}>Eligibility</Link>
                        <Link className={LinkStyle}>Application Process</Link>
                        <Link className={LinkStyle}>Syllabus</Link>
                    </div>
                </div>
                <div class="text-[#747474] text-[15px] font-[550] leading-6 tracking-wide mt-9 md:order-5 md:pt-32 lg:pb-28">
                    <div class="flex justify-start md:-mt-32">
                        <p class="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                            support
                        </p>
                    </div>

                    <Link className={LinkStyle}>FAQ's</Link>
                </div>
            </div>
            <div class="text-[#797878] text-[15px] font-[550] leading-6 tracking-wide md:order-4 lg:">
                <p class="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                    get in touch
                </p>

                <strong class="text-[#b6b6b6] text-[15px] tracking-wide">
                    Our Company
                    <br />
                </strong>

                <Link className={LinkStyle}>
                    NH-70 Chandigarh-Ludhiana Highway, <br /> Mohali, Punjab
                    (INDIA) <br /> General Helpline No:+91 987-6543-210
                </Link>
            </div>
        </div>
        <div class="divide-y divide-[#747474] contrast-200 mt-3 md:-mt-4 md:-mb-2 lg:-mt-16 xl:-mt-24 mx-12">
            <p>&nbsp;</p>
            <p>&nbsp;</p>
        </div>
        <span class="inline-flex mx-auto w-full sm:mt-0 mt-2 justify-center">
            <Link class="text-gray-600 p-3 transition-colors bg-gray-300 hover:bg-white">
                <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
            </Link>
            <Link class="ml-3 text-gray-600 p-3 transition-colors bg-gray-300 hover:bg-white">
                <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
            </Link>
            <Link class="ml-3 text-gray-600 p-3 transition-colors bg-gray-300 hover:bg-white">
                <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                >
                    <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
            </Link>
            <Link class="ml-3 text-gray-600 p-3 transition-colors bg-gray-300 hover:bg-white">
                <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="0"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12pz"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
            </Link>
        </span>
    </footer>
);

export default C;
