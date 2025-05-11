import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Allow both the current project and Stencil library
        ".", // always allow project root
        path.resolve(__dirname, "../stencil-component/dist"), // allow correct stencil output path
        path.resolve(__dirname, "../stencil-component"), // optional: entire stencil folder
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
