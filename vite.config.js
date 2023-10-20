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
        // manifest: true,
        outDir: "dist",
        lib: {
            entry: "src/index.jsx",
            // entry: resolve(__dirname, "src/index.jsx"),
            name: "react-wind-components",
            fileName: "index",
        },
        rollupOptions: {},
    },
    plugins: [
        react(),
        cssInjectedByJsPlugin({ relativeCSSInjection: true }),
        tailwindcss(),
    ],
});
