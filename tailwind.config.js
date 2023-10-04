/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary1: "#4681f4",
                secondary1: "#fe7678",
                secondary2: "#5dbea3",
            },
        },
    },
    plugins: [],
};
