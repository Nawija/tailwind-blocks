import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/Seo";

import { BiSolidCaretDownCircle } from "react-icons/bi";

export default function IndexPage() {
    return (
        <Layout>
            <div className="h-[92vh] wrapper2xl flex items-center justify-center flex-col font-bold text-3xl text-main w-max relative">
                <p className="animate-bounce">Welcome to</p>
                <div className="flex items-end justify-center flex-col">
                    <h1 className="text-5xl md:text-6xl w-max lg:text-7xl -tracking-wide p-1 bg-gradient-to-tr from-blue-400 to-blue-700 bg-clip-text text-transparent">
                        Tailwind Blocks
                    </h1>
                    <p className="text-sm">
                        by{" "}
                        <Link
                            to="http://seovileo.pl/"
                            target="_blank"
                            className="bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent -tracking-wide"
                        >
                            seovileo
                        </Link>
                    </p>
                    <p className="mt-2">Code ready to copy!</p>
                    <BiSolidCaretDownCircle className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce text-5xl opacity-60" />
                </div>
            </div>
            <div className="mx-auto w-full px-5 lg:px-12 flex flex-col items-center justify-center space-y-6 font-medium my-24 pb-24 max-w-5xl">
                <section>
                    <h1 className="text-3xl font-semibold mb-1 text-center">
                        Unlock Your Web Design Potential with Tailwind CSS
                        Blocks
                    </h1>
                    <p className="text-center text-xl">
                        Get started quickly with our collection of ready-to-use
                        code blocks for Tailwind CSS.
                    </p>
                </section>
                <section class="text-gray-800">
                    <div class="container px-5 lg:px-12 py-24 mx-auto flex flex-wrap">
                        <div class="flex flex-wrap w-full">
                            <div class="w-full md:pr-10 md:py-6">
                                <div class="flex relative pb-12">
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            class="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 className="text-xl font-semibold mb-1">
                                            Why Choose Tailwind CSS Blocks?
                                        </h2>
                                        <section>
                                            <p>
                                                Discover the benefits of using
                                                our pre-designed code blocks:
                                            </p>
                                            <ul>
                                                <li>
                                                    <strong>Save Time:</strong>{" "}
                                                    No need to start from
                                                    scratch. Implement complex
                                                    layouts and components with
                                                    ease.
                                                </li>
                                                <li>
                                                    <strong>
                                                        Consistency:
                                                    </strong>{" "}
                                                    Ensure a consistent design
                                                    language across your
                                                    website.
                                                </li>
                                                <li>
                                                    <strong>
                                                        SEO-Friendly:
                                                    </strong>{" "}
                                                    Our code is optimized for
                                                    search engines, helping you
                                                    rank higher in Google.
                                                </li>
                                                <li>
                                                    <strong>Responsive:</strong>{" "}
                                                    All blocks are responsive by
                                                    default, ensuring a seamless
                                                    user experience on any
                                                    device.
                                                </li>
                                            </ul>
                                        </section>
                                    </div>
                                </div>
                                <div class="flex relative pb-12">
                                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            class="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 className="text-xl font-semibold mb-1">
                                            How to Use Tailwind CSS Blocks
                                        </h2>
                                        <section>
                                            <p>
                                                It's simple! Just follow these
                                                steps:
                                            </p>
                                            <ol>
                                                <li>
                                                    Copy the code of the desired
                                                    block from our library.
                                                </li>
                                                <li>
                                                    Paste it into your HTML or
                                                    template file.
                                                </li>
                                                <li>
                                                    Customize the block to match
                                                    your project's style and
                                                    content.
                                                </li>
                                                <li>
                                                    That's it! Your stunning web
                                                    page is ready.
                                                </li>
                                            </ol>
                                        </section>
                                    </div>
                                </div>

                                <div class="flex relative">
                                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            class="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-grow pl-4">
                                        <h2 className="text-xl font-semibold mb-1">
                                            Start Building Today
                                        </h2>
                                        <section>
                                            <p>
                                                Don't waste time reinventing the
                                                wheel. Join thousands of
                                                developers who rely on Tailwind
                                                CSS Blocks for fast and
                                                beautiful web development.
                                            </p>
                                            <Link
                                                to="/card"
                                                className="underline text-sky-700"
                                                title="Browse Our Code Library"
                                            >
                                                Browse Our Code Library
                                            </Link>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
export const Head = () => <Seo />;
