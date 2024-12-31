import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                serif: ["Noto Serif"],
            },
            colors: {
                main: "#ECEFF3",
                tailwind: "#38BDF8",
                react: "#58C4DC",
                laravel: "#FF2D20",
            },
            keyframes: {
                bounceY: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" }, //jarak translate y dalam pixel
                },
            },
            animation: {
                bounceY: "bounceY 5s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
