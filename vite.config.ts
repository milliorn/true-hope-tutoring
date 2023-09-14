import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/true-hope-tutoring/", this is for github pages
  plugins: [ react() ],
})
