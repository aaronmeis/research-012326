import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Use relative paths for GitHub Pages compatibility
  // If deploying to a project site (username.github.io/repo-name/),
  // set base to '/repo-name/' instead
  base: process.env.GITHUB_PAGES_BASE || './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
