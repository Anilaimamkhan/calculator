// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/calculator/", // ← IMPORTANT: repo name with slashes
  plugins: [react()],
})
