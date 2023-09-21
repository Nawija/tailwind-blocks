import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/Seo";

export default function ErrorPage() {
    return (
        <Layout>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 wrapper2xl flex items-center justify-center flex-col font-bold text-3xl text-main w-max">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="text-5xl md:text-6xl w-max lg:text-7xl -tracking-wide p-3 bg-gradient-to-tr from-blue-500 to-blue-700 bg-clip-text text-transparent">
                        Error 404
                    </h1>

                    <Link
                        to="/"
                        className="text-sm mt-12 bg-white p-3 border rounded-lg"
                    >
                        Go Back
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
export const Head = () => <Seo />;