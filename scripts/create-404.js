import { readFileSync, writeFileSync, copyFileSync, existsSync } from 'fs';
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

// Copy PDF files to dist folder
const pdfFiles = [
  'AI+Developments+Report_+January+2026.pdf',
  'January-2026-Report.pdf',
  'Top-AI-Agents-Models-and-Emerging-Technologies-in-2026-An-Enterprise-Architects-Guide.pdf'
];

pdfFiles.forEach(pdfFile => {
  const sourcePath = join(rootDir, pdfFile);
  const destPath = join(rootDir, 'dist', pdfFile);
  
  if (existsSync(sourcePath)) {
    copyFileSync(sourcePath, destPath);
    console.log(`✓ Copied ${pdfFile} to dist folder`);
  } else {
    console.warn(`⚠ Warning: ${pdfFile} not found, skipping...`);
  }
});
