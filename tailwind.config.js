/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{html,njk}"],
    theme: {
        colors: {
            current: "currentColor",
            inherit: "inherit",
            transparent: "transparent",
            ivory: "#FDFBE8",
            madder: "#A41623",
            gunmetal: "#162931",
        },
        extend: {
            borderWidth: {
                5: "5px",
            },
            fontFamily: {
                AbrilFatface: ["Abril Fatface"],
            },
        },
    },
    plugins: [],
};
