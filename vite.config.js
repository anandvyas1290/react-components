import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { libInjectCss } from "vite-plugin-lib-inject-css";

import tailwindcss from "tailwindcss";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "lib/main.jsx"),
            name: "react-wind-components",
            // fileName: (format) => `react-wind-components.${format}.js`,
            fileName: "react-wind-components",
        },

        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                },
            },
        },
    },
    plugins: [react(), tailwindcss(), libInjectCss()],
});
