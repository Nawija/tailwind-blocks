import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ description, siteUrl, children }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        siteUrl
                        author
                    }
                }
            }
        `
    );

    const defaultTitle = site.siteMetadata?.title;
    const metaDescription = description || site.siteMetadata.description;
    const canonicalUrl = siteUrl || site.siteMetadata.siteUrl;

    return (
        <>
            <title>{defaultTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={defaultTitle} />
            <link rel="canonical" href={canonicalUrl} />
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content="tailwind blocks" />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content="seovileo" />
            <meta name="twitter:title" content={defaultTitle} />
            <meta name="twitter:description" content={metaDescription} />
            {children}
        </>
    );
}

export default Seo;
