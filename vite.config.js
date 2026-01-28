import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Use relative paths for GitHub Pages compatibility
  // For project sites (username.github.io/repo-name/), use '/repo-name/'
  // For user/organization sites (username.github.io/), use '/'
  base: process.env.GITHUB_PAGES_BASE || '/research-012326/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
