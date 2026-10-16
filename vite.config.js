import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";

const options = { pretty: true };
const locals = { name: "DevSolve" };

export default defineConfig({
  plugins: [pugPlugin(options, { pagesUrl: "./src/pages/" })],
  build: {
    minify: false, 
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});