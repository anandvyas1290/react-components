import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: "src/index.jsx",
            name: "react-wind-components",
            fileName: "index",
        },
        rollupOptions: {},
    },
    plugins: [react(), tailwindcss()],
});
