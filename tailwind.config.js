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
            borderRadius: {
                lg2: "10px",
            },
            animation: {
                "rwc-msg-in": "rwc-msg-in .3s cubic-bezier(.08, .82, .17, 1)",
                "rwc-msg-out":
                    "rwc-msg-out .3s cubic-bezier(.6, .04, .98, .34)",
            },
            keyframes: {
                "rwc-msg-in": {
                    from: {
                        opacity: 0,
                        transform: "translateX(-50%) translateY(-50%)",
                    },

                    to: {
                        opacity: 1,
                        transform: "translateX(-50%) translateY(0)",
                    },
                },

                "rwc-msg-out": {
                    from: {
                        opacity: 1,
                        transform: "translateX(-50%) translateY(0)",
                    },

                    to: {
                        opacity: 0,
                        transform: "translateX(-50%) translateY(-50%)",
                    },
                },
            },
        },
    },
    plugins: [],
};
