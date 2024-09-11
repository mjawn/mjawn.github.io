const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.webc"],
    theme: {
        colors: {
            current: "currentColor",
            inherit: "inherit",
            transparent: "transparent",
            ivory: "#FDFBE8",
            madder: "#A41623",
            gunmetal: "#162931",
            moonstone: "#0FA3B1"
        },
        extend: {
            borderWidth: {
                5: "5px"
            },
            fontFamily: {
                heading: ["Lora", "serif"],
                body: ["Jost", "sans-serif"]
            }
        }
    },
    plugins: []
};
