function importAll(r) {
    const components = {};
    r.keys().forEach((key) => {
        const componentName = key.replace(/^.+\/([^/]+)\.js$/, "$1");
        components[componentName] = r(key).default;
    });
    return components;
}

const BlogComponents = importAll(require.context("./blog", true, /\.js$/));
const ButtonComponents = importAll(require.context("./button", true, /\.js$/));
const CardComponents = importAll(require.context("./card", true, /\.js$/));
const CtaComponents = importAll(require.context("./cta", true, /\.js$/));
const FooterComponents = importAll(require.context("./footer", true, /\.js$/));
const GalleryComponents = importAll(
    require.context("./gallery", true, /\.js$/)
);
const HeroComponents = importAll(require.context("./hero", true, /\.js$/));
const NavigationComponents = importAll(
    require.context("./navigation", true, /\.js$/)
);
const PricingComponents = importAll(
    require.context("./pricing", true, /\.js$/)
);

export {
    BlogComponents,
    ButtonComponents,
    CardComponents,
    CtaComponents,
    FooterComponents,
    GalleryComponents,
    HeroComponents,
    NavigationComponents,
    PricingComponents,
};
