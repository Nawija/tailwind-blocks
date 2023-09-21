/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Tailwind Blocks | Seovileo`,
        siteUrl: `https://www.seovileo.pl`,
        author: `seovileo`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-postcss",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-robots-txt",
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `#ffbb00`,
                showSpinner: false,
                minimum: 0.1,
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/favicon.png",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};
