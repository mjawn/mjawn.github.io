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
        fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem"
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
