import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base path ko plugins array se nikal kar yahan main object mein rakhna hai
  base: './', 
  plugins: [
    react(),
    tailwindcss(),
  ],
})