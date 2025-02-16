import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      maxSessionMemory: 5000, // Increase memory for Vite dev server
    },
  },
})
