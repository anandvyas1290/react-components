/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    purge: ["./src/**/*.{js,ts,jsx,tsx}"],
    // purge: {
    //     enabled: import.meta.env.VITE_MODE === "production",
    // },
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
