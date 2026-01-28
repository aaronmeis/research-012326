import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Read the built index.html
const indexPath = join(rootDir, 'dist', 'index.html');
const indexContent = readFileSync(indexPath, 'utf-8');

// Write it as 404.html for GitHub Pages SPA routing
const fourOhFourPath = join(rootDir, 'dist', '404.html');
writeFileSync(fourOhFourPath, indexContent, 'utf-8');

console.log('✓ Created 404.html for GitHub Pages SPA routing');
