import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import optimizeImagePlugin from "vite-plugin-optimize-image";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), optimizeImagePlugin()],
})
