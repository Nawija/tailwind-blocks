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
        {
            resolve: "gatsby-source-datocms",
            options: {
                apiToken: "0a0e124702c80b2ad0cc48840d6d7d",
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-postcss",
        "gatsby-plugin-sitemap",
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
