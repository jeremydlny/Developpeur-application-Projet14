import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import compression from 'vite-plugin-compression'
import cssnano from 'cssnano'

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'brotli', // Plus efficace que gzip
      ext: '.br',
      threshold: 1024, // Compression pour fichiers > 1kb
      deleteOriginFile: false
    }),
    compression({ // Double compression (brotli + gzip)
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    cssCodeSplit: true,
    modulePreload: true,
    chunkSizeWarningLimit: 600,
    reportCompressedSize: false, // Améliore vitesse de build
    
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
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'redux-vendor': ['@reduxjs/toolkit', 'react-redux'],
          'ui-vendor': ['antd'],
          'utils-vendor': ['lodash', 'dayjs']
        },
        inlineDynamicImports: false,
        compact: true
      }
    }
  },

  css: {
    postcss: {
      plugins: [
        cssnano({
          preset: ['default', {
            discardComments: { removeAll: true },
            normalizeWhitespace: true,
            minifyFontValues: true,
            minifyGradients: true,
            reduceIdents: false
          }]
        })
      ]
    },
    modules: {
      generateScopedName: '[hash:base64:8]'
    }
  },

  server: {
    compression: true
  }
})