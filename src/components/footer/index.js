const footerComponents = {};
const componentContext = require.context("./", false, /\.js$/);

componentContext.keys().forEach((key) => {
    if (key !== "./index.js") {
        const componentName = key.replace(/\.js$/, "").toUpperCase();
        footerComponents[componentName] = componentContext(key).default;
    }
});

export default footerComponents;
