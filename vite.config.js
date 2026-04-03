import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isNetlify = process.env.NETLIFY === 'true'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isNetlify ? '/' : '/SMAM/'
})
