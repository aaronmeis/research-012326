#!/bin/bash

# Deployment script for GitHub Pages
# This script copies the dist folder contents to the root for GitHub Pages deployment

echo "🚀 Starting deployment..."

# Build the project first
echo "📦 Building project..."
npm run build

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist folder not found. Build failed?"
    exit 1
fi

# Copy dist contents to root (excluding .git)
echo "📋 Copying dist files to root..."
cp -r dist/* .

# Copy assets folder if it exists
if [ -d "dist/assets" ]; then
    echo "📁 Copying assets folder..."
    cp -r dist/assets .
fi

echo "✅ Deployment files ready!"
echo ""
echo "Next steps:"
echo "1. Review the changes: git status"
echo "2. Add files: git add ."
echo "3. Commit: git commit -m 'Deploy to GitHub Pages'"
echo "4. Push: git push origin main"
echo ""
echo "Then configure GitHub Pages:"
echo "- Go to repository Settings → Pages"
echo "- Source: Deploy from a branch"
echo "- Branch: main (or your default branch)"
echo "- Folder: / (root)"
echo "- Click Save"
