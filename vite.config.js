import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import react from "@vitejs/plugin-react";
// import autoprefixer from "autoprefixer";
// import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
    // css: {
    //     postcss: {
    //         plugins: [tailwindcss(), autoprefixer()],
    //     },
    // },
    build: {
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
        tailwindcss(),
        // cssInjectedByJsPlugin({ relativeCSSInjection: true }),
    ],
});
