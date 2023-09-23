import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/Seo";

export default function IndexPage() {
    return (
        <Layout>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 wrapper2xl flex items-center justify-center flex-col font-bold text-3xl text-main w-max">
                <p className="">Welcome to</p>
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
                </div>
            </div>
        </Layout>
    );
}
export const Head = () => <Seo />;