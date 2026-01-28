# Deployment Guide

## Quick Deployment Steps

### 1. Build the Project
```bash
npm run build
```

This creates the `dist` folder with all production files.

### 2. Copy Files to Root

**Option A: Manual Copy**
```bash
# Copy all files from dist to root
cp -r dist/* .
cp -r dist/assets . 2>/dev/null || true
```

**Option B: Use Deployment Script**
```bash
./scripts/deploy.sh
```

### 3. Commit and Push to GitHub

```bash
# Check what will be committed
git status

# Add all files
git add .

# Commit
git commit -m "Deploy to GitHub Pages"

# Push to GitHub
git push origin main
```

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Deploy from a branch**
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/ (root)`
4. Click **Save**

### 5. Wait for Deployment

- GitHub Pages will build and deploy your site
- Usually takes 1-2 minutes
- You'll see a green checkmark when it's ready

### 6. Access Your Site

Your site will be available at:
```
https://yourusername.github.io/research-012326/
```

## Important Notes

- The `dist` folder is in `.gitignore` - don't commit it
- Only commit the built files in the root directory
- The `404.html` file handles SPA routing on GitHub Pages
- Base path is configured for `/research-012326/` subdirectory

## Troubleshooting

**If the site doesn't load:**
1. Check GitHub Pages settings (Settings → Pages)
2. Verify the branch and folder are correct
3. Check the Actions tab for build errors
4. Ensure `index.html` is in the root directory

**If routing doesn't work:**
- Verify `404.html` exists in root
- Check that React Router basename matches your repo name
- Clear browser cache and try again

## Updating the Site

To update your deployed site:

1. Make changes to source files
2. Run `npm run build`
3. Copy `dist/*` to root (or use `./scripts/deploy.sh`)
4. Commit and push:
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```

GitHub Pages will automatically rebuild and deploy your changes.
