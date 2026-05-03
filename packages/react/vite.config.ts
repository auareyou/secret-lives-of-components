import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: "src/index.ts",
        "sl-button": "src/sl-button.ts",
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@lit/react",
        "@secret-lives/core",
        /^@secret-lives\/core\//,
        /^lit\//,
        "lit",
      ],
    },
    target: "es2022",
    minify: false,
    sourcemap: true,
  },
});
