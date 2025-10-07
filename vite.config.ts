import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/services': path.resolve(__dirname, './src/services'),
    },
  },
  server: {
    port: 5175,
    strictPort: true, // Enforce port 5175 (registered in /root/PORTS.md)
    host: '0.0.0.0', // Allow external access
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'readme.wbtlabs.com',
      '.wbtlabs.com', // Allow all wbtlabs.com subdomains
    ],
    proxy: {
      '/api': {
        target: 'http://localhost:5176',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
