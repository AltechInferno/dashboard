import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import {spliteVendorChunkPlugin} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: [
        /^node: .*/,
      ]
    },
    chunkSizeWarningLimit: 1000000000000,
  },
});
