import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost",
        changeOrigin: true,
      },
      "/socket.io": {
        target: "ws://localhost",
        ws: true,
      },
    },
  },
});
