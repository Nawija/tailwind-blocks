import React, { useRef, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
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
    const [copiedIndex, setCopiedIndex] = useState(-1);

    const handleCopyClick = (index) => {
        const htmlToCopy = data.allDatoCmsNav.edges[index].node.code;
        navigator.clipboard.writeText(htmlToCopy).then(() => {
            setCopiedIndex(index);
            setTimeout(() => {
                setCopiedIndex(-1);
            }, 1000);
        });
    };

    return (
        <Layout>
            {data.allDatoCmsNav.edges.map(({ node }, index) => (
                <div className="relative mb-2 group" key={index}>
                    <div className="flex-ec w-full text-xl p-2">
                        <button
                            className="bg-main p-3 rounded-full border text-white"
                            onClick={() => handleCopyClick(index)}
                        >
                            {copiedIndex === index ? (
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
                        <div dangerouslySetInnerHTML={{ __html: node.code }} />
                    </div>
                </div>
            ))}

            
        </Layout>
    );
}
