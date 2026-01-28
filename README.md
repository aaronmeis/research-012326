# Model Specifications Viewer

A React + Vite Single Page Application for viewing and comparing AI model specifications across different tiers.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## GitHub Pages Deployment

This SPA is configured to work with GitHub Pages. Follow these steps to deploy:

### Option 1: Deploy from `dist` folder (Recommended)

1. **Build the project:**
   ```bash
   npm run build
   ```
   This will create the `dist` folder with all production files and automatically create `404.html` for SPA routing.

2. **Configure GitHub Pages:**
   - Go to your repository Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Choose the branch (usually `main` or `master`)
   - Select `/ (root)` or `/dist` folder depending on your setup
   - Click Save

3. **If deploying from root:**
   - Copy the contents of `dist` to the root of your repository
   - Commit and push

### Option 2: Deploy from `dist` folder using GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
      - uses: actions/deploy-pages@v4
```

### Important Notes

- The `404.html` file is automatically created during build to handle SPA routing on GitHub Pages
- The app uses relative paths (`base: './'`) for compatibility with GitHub Pages
- If deploying to a project site (e.g., `username.github.io/repo-name/`), update `vite.config.js` to set `base: '/repo-name/'` or use the `GITHUB_PAGES_BASE` environment variable

## Project Structure

- `src/` - Source files
  - `components/` - React components
  - `data/` - Model data (JSON)
  - `App.jsx` - Main application component
  - `main.jsx` - Application entry point
- `dist/` - Production build output (generated)
- `scripts/` - Build scripts
  - `create-404.js` - Script to create 404.html for GitHub Pages
