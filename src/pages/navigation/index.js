import React, { useRef, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";
import { FaCopy, FaCheck } from "react-icons/fa6";

export default function NavigationPage() {
    const data = useStaticQuery(graphql`
        {
            allDatoCmsNav {
                edges {
                    node {
                        code
                        tag
                    }
                }
            }
        }
    `);
    const htmlToCopyRef = useRef(null);
    const [coppyAnim, setCopyAnim] = useState(false);

    const handleCopyClick = () => {
        if (htmlToCopyRef.current) {
            const htmlToCopy = htmlToCopyRef.current.innerHTML;
            navigator.clipboard.writeText(htmlToCopy).then(() => {
                setCopyAnim(true);
                setTimeout(() => {
                    setCopyAnim(false);
                }, 1000);
            });
        }
    };

    return (
        <Layout>
            {data.allDatoCmsNav.edges.map(({ node }, index) => (
                <div className="relative mb-2 group" key={index}>
                    <div className="flex-ec w-full text-xl p-2">
                        <button
                            className="bg-main p-3 rounded-full border text-white"
                            onClick={handleCopyClick}
                        >
                            {coppyAnim ? (
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
                        <div
                            ref={htmlToCopyRef}
                            dangerouslySetInnerHTML={{ __html: node.code }}
                        />
                    </div>
                </div>
            ))} 
        </Layout>
    );
}
