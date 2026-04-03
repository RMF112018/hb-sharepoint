import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
var externalSpfxPackages = [
    "@microsoft/sp-core-library",
    "@microsoft/sp-property-pane",
    "@microsoft/sp-webpart-base",
];
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "dist",
        sourcemap: true,
        rollupOptions: {
            external: externalSpfxPackages,
            input: {
                homepage: "src/index.tsx",
            },
            output: {
                entryFileNames: "[name].js",
            },
        },
    },
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: "./src/test/setup.ts",
    },
});
//# sourceMappingURL=vite.config.js.map