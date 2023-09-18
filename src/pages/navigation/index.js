import React, { useRef, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/layout";
import { FaCopy } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";

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
                <div className="relative m-6 group" key={index}>
                    <div className="flex-e absolute w-full text-xl p-6">
                        <button
                            className="bg-white p-3 rounded-full border text-main"
                            onClick={handleCopyClick}
                        >
                            {coppyAnim ? (
                                <div className="text-green-500 relative font-semibold">
                                    <GrStatusGood />
                                    <span
                                        className={`text-sm absolute top-0 -left-6 transition-transform -translate-x-full  ${
                                            coppyAnim ? "" : ""
                                        }`}
                                    >
                                        Skopiowano!
                                    </span>
                                </div>
                            ) : (
                                <FaCopy />
                            )}
                        </button>
                    </div>
                    <div className="bg-white rounded-lg border">
                        <div
                            ref={htmlToCopyRef}
                            dangerouslySetInnerHTML={{ __html: node.code }}
                        ></div>
                    </div>
                </div>
            ))}
        </Layout>
    );
}
