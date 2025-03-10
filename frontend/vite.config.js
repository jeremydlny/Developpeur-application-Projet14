import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import compression from 'vite-plugin-compression'
import cssnano from 'cssnano'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react({
      babel: {
        // Optimisation JSX
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ]
      }
    }),
    // Double compression pour meilleure performance
    compression({
      algorithm: 'brotli',
      ext: '.br',
      threshold: 1024
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],

  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // Inline les petits assets
    chunkSizeWarningLimit: 600,
    reportCompressedSize: false, // Améliore le build time
    
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      }
    },
    
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'redux-vendor': ['@reduxjs/toolkit', 'react-redux'],
          'ui-vendor': ['antd'],
          'utils-vendor': ['lodash', 'dayjs']
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js'
      }
    }
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    },
    postcss: {
      plugins: [
        cssnano({
          preset: ['default', {
            discardComments: { removeAll: true },
            minifyFontValues: true
          }]
        })
      ]
    }
  }
})