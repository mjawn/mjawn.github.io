/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{html,njk}"],
    theme: {
        colors: {
            current: "currentColor",
            inherit: 'inherit',
            transparent: 'transparent',
            ivory: "#FDFBE8",
            madder: "#A41623",
            gunmetal: "#162931"
        },
        fontFamily: {
            sans: [...defaultTheme.fontFamily.sans],
            serif: [...defaultTheme.fontFamily.serif],
            mono: [...defaultTheme.fontFamily.mono],
            AbrilFatface: ["Abril Fatface"],
            YesevaOne: ["Yeseva One"],
            Chonburi: ["Chonburi"],
            PollerOne: ["Poller One"],
            Limelight: ["Limelight"],
            OrelegaOne: ["Orelega One"]
        },
        extend: {}
    },
    plugins: []
}
