import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import compression from 'vite-plugin-compression'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    compression({
      algorithm: 'brotli',
      ext: '.br'
    })
  ],

  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'redux-vendor': ['@reduxjs/toolkit', 'react-redux'],
          'ui-vendor': ['antd']
        }
      }
    }
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },

  server: {
    port: 5173,
    compression: true
  }
})