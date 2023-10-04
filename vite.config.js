import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: "src/index.js",
            name: "react-wind-components",
        },
        rollupOptions: {},
    },
    plugins: [react()],
});
