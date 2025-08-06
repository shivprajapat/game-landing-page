import { fileURLToPath } from "url";
import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// 👇 This replaces __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
