import React, { useState } from "react";
import Layout from "../../components/layout";
import { FaCopy, FaCheck } from "react-icons/fa6";

import A from "../../components/navigation/a";
import B from "../../components/navigation/b";

export default function NavigationPage() {
    const [copiedIndex, setCopiedIndex] = useState(-1);
    const [htmlToCopy, setHtmlToCopy] = useState("");

    const handleCopyClick = () => {
        navigator.clipboard.writeText(htmlToCopy).then(() => {
            setCopiedIndex(0); // Przykładowy index lub zmiennej związaną z kontekstem
            setTimeout(() => {
                setCopiedIndex(-1);
            }, 1000);
        });
    };

    return (
        <Layout>
            <div className="relative mb-2 group transition-all">
                <div className="flex flex-col w-full text-xl p-2">
                    <button
                        className="bg-main p-3 rounded-full border text-white"
                        onClick={() => handleCopyClick()}
                    >
                        {copiedIndex !== -1 ? (
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
                <div className="bg-white rounded-lg border m-2">
                    <A setHtmlToCopy={setHtmlToCopy} />{" "}
                </div>
            </div>
            <div className="relative mb-2 group">
                <div className="flex-ec w-full text-xl p-2">
                    <button
                        className="bg-main p-3 rounded-full border text-white"
                        onClick={() => handleCopyClick()}
                    >
                        {copiedIndex !== -1 ? (
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
                <div className="bg-white rounded-lg border m-2">
                    <B setHtmlToCopy={setHtmlToCopy} />{" "}
                    {/* Przekaż funkcję do ustawiania zawartości */}
                </div>
            </div>
        </Layout>
    );
}
