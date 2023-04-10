const EleventyWebcPlugin = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(EleventyWebcPlugin, {
        // Glob to find no-import global components
        // This path is relative to the project-root!
        // The default value is shown:
        components: "src/components/**/*.webc"
    });
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
