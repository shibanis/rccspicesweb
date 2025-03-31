/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: [
        "./src/app/*.{js,jsx,ts,tsx}",
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/sections/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Source Sans Pro"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}