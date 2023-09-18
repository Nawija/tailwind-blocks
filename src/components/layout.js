import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Nav from "./Nav";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div className="flex">
            <Nav siteTitle={data.site.siteMetadata?.title || `Seovileo`} />
            <main className="w-full min-h-screen relative bg-gray-100 px-8">
                {children}
            </main>
        </div>
    );
};

export default Layout;
