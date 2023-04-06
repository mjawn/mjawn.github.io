const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(pluginWebc);
    // Return your Object options:
    return {
        dir: {
            input: "src",
            includes: "includes",
            layouts: "includes/layouts",
            output: "dist"
        }
    };
};
