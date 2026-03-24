import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@css': resolve(__dirname, 'src/assets/css'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
