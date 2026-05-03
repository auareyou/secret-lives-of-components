import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: "src/index.ts",
        "components/sl-button": "src/components/sl-button.ts",
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: ["lit", /^lit\//],
    },
    target: "es2022",
    minify: false,
    sourcemap: true,
  },
});
