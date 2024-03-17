import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  // base: "/game-api/",
  // base: "/",
  server: {
    proxy: {
      "/api": {
        // target: "https://www.freetogame.com/api/games?platform=pc",
        target: "https://www.freetogame.com/api",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [react()],
})
