import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import vitePrettier from 'vite-plugin-prettier'

export default defineConfig({
  plugins: [
    react(),
    vitePrettier(), // Adicionando o plugin Prettier
  ],
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, './utils'),
    },
  },
})
