/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    pathPrefix: "/tailwind-blocks",
    siteMetadata: {
        title: `Tailwind CSS Blocks - Ready-to-Use Code for Stunning Web Pages`,
        description: `Create Stunning Web Pages with Tailwind CSS Blocks - Your Source for Ready-to-Use Code`,
        siteUrl: `https://www.seovileo.com`,
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
