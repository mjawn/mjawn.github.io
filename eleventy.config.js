const EleventyWebcPlugin = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(EleventyWebcPlugin, {
        components: "src/components/**/*.webc"
    });
    return {
        dir: {
            input: "src",
            includes: "includes",
            layouts: "includes/layouts",
            output: "dist"
        }
    };
};
