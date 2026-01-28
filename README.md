# AI Agents & Models - Current State

A modern React + Vite Single Page Application showcasing AI model specifications, visualizations, and research reports for January 2026.

## Features

- **Model Specifications**: Browse and compare AI models across different tiers (Enterprise, Mid-Tier, Small)
- **Visualizations**: View interactive image cards with model visualizations
- **Research Reports**: Download PDF reports on AI developments and emerging technologies
- **Modern Design**: Clean, responsive UI inspired by modern web design principles
- **GitHub Pages Ready**: Fully configured for static site deployment

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

## Project Structure

```
research-012326/
├── src/
│   ├── components/
│   │   ├── ImageCard.jsx      # Image display component
│   │   ├── ModelCard.jsx       # Model specification card
│   │   ├── ModelList.jsx       # Model grid layout
│   │   └── TierSelector.jsx    # Tier selection buttons
│   ├── data/
│   │   └── models.json         # Model specifications data
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Application styles
│   └── main.jsx                # Application entry point
├── scripts/
│   └── create-404.js           # Build script for GitHub Pages
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies and scripts
```

## GitHub Pages Deployment

This SPA is fully configured for GitHub Pages deployment. The build process automatically:

1. Builds the React application
2. Creates `404.html` for SPA routing
3. Copies PDF files to the `dist` folder
4. Copies image files to the `dist` folder

### Quick Deploy

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder:**
   - Option A: Copy contents of `dist/` to repository root
   - Option B: Configure GitHub Pages to serve from `/dist` folder
   - Option C: Use GitHub Actions (see below)

### GitHub Actions Deployment

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

## Build Output

The `dist` folder contains:

- `index.html` - Main entry point with PDF download links
- `404.html` - SPA routing fallback for GitHub Pages
- `assets/` - CSS and JavaScript bundles
- PDF files - Research reports (3 files)
- Image files - Visualizations (2 PNG files)

## Configuration

- **Base Path**: Configured for relative paths (`base: './'`) for GitHub Pages compatibility
- **SPA Routing**: `404.html` automatically created for client-side routing
- **Static Assets**: PDFs and images automatically copied during build

## Technologies

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Bootstrap 5** - CSS framework (via CDN in components)
- **Modern CSS** - Custom styling with animations and responsive design

## License

Copyright © 2026 AI Research. All rights reserved.
