import React, { useState } from "react";
import Layout from "../../components/layout";
import { FaCopy, FaCheck } from "react-icons/fa6";

import A from "../../components/navigation/a";
import B from "../../components/navigation/b";

export default function NavigationPage() {
    const [copiedIndex, setCopiedIndex] = useState(false);
    const [htmlToCopy, setHtmlToCopy] = useState("");

    const handleCopyClick = () => {
        setCopiedIndex(!copiedIndex);
        setTimeout(() => {
            setCopiedIndex(false);
        }, 1000);
    };

    return (
        <Layout>
            <div className="relative mb-2 group transition-all">
                <div className="flex flex-col w-full text-xl p-2">
                    <div className="bg-main rounded-full border text-second flex-b py-2 px-4">
                        <p className="text-sm font-semibold tracking-wide">
                            Section #1
                        </p>
                        <button
                            className="bg-main p-3 rounded-full border text-second w-max ml-auto"
                            onClick={() => handleCopyClick()}
                        >
                            {copiedIndex ? (
                                <div className="text-green-600 relative font-semibold scale-up-center">
                                    <FaCheck className="flip-horizontal-bottom" />
                                    <span
                                        className={`text-sm absolute top-1/2 -left-5 rounded-lg transition-transform -translate-x-full -translate-y-1/2 bg-white p-2`}
                                    >
                                        Skopiowano!
                                        <div className="bg-white w-2 h-2 -z-10 rotate-45 absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2" />
                                    </span>
                                </div>
                            ) : (
                                <FaCopy />
                            )}
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg border m-2">
                    <A setHtmlToCopy={setHtmlToCopy} />{" "}
                </div>
            </div>
            <div className="relative mb-2 group transition-all">
                <div className="flex flex-col w-full text-xl p-2">
                    <div className="bg-main rounded-full border text-second flex-b py-2 px-4">
                        <p className="text-sm font-semibold tracking-wide">
                            Section #2
                        </p>
                        <button
                            className="bg-main p-3 rounded-full border text-second w-max ml-auto"
                            onClick={() => handleCopyClick()}
                        >
                            {copiedIndex ? (
                                <div className="text-green-600 relative font-semibold scale-up-center">
                                    <FaCheck />
                                    <span
                                        className={`text-sm absolute top-1/2 -left-5 rounded-lg transition-transform -translate-x-full -translate-y-1/2 bg-white p-2`}
                                    >
                                        Skopiowano!
                                        <div className="bg-white w-2 h-2 -z-10 rotate-45 absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2" />
                                    </span>
                                </div>
                            ) : (
                                <FaCopy />
                            )}
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg border m-2">
                    <B setHtmlToCopy={setHtmlToCopy} />{" "}
                </div>
            </div>
        </Layout>
    );
}
