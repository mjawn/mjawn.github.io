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
            rojo: "#DC1E2E",
            gunmetal: "#162931",
            jungle: "#06A77D",
            fern: "#4F7E44",
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
