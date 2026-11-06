import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {}
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor_react: ['react', 'react-dom'],
          vendor_motion: ['framer-motion'],
          vendor_three: ['three'],
          vendor_icons: ['lucide-react']
        }
      }
    }
  }
})
