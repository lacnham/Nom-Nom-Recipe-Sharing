import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginCssModules from "vite-plugin-css-modules";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginCssModules()]
})
