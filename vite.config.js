import react from "@vitejs/plugin-react-swc";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { resolve } from "path";
import { defineConfig } from "vite";

import tailwindcss from "tailwindcss";
// import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
    // css: {
    // postcss: {
    // plugins: [require("tailwindcss"), require("autoprefixer")],
    // },
    // },
    build: {
        // outDir: "dist",
        lib: {
            entry: path.resolve(__dirname, "src/index.jsx"),
            name: "react-wind-components",
            fileName: (format) => `index.${format}.js`,
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
    plugins: [
        react(),
        cssInjectedByJsPlugin({ relativeCSSInjection: true }),
        tailwindcss(),
    ],
});
