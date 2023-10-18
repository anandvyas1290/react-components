/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./dist/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "rwc-primary1": "#4681f4",
                secondary1: "#fe7678",
                secondary2: "#5dbea3",
            },
        },
    },
    plugins: [],
};
