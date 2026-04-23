const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC = path.join(__dirname, 'src', 'assets', 'photos', '3-7-2026');
const OUT_BASE = path.join(__dirname, 'src', 'assets', 'images');

const selections = [
  { folder: 'accessories', name: 'acc1.jpg', src: 'Acceseries 1.jpg' },
  { folder: 'accessories', name: 'acc2.jpg', src: 'Acceseries 2.JPG' },
  { folder: 'accessories', name: 'acc3.jpg', src: 'Acceseries 3.JPG' },
  { folder: 'accessories', name: 'acc4.jpg', src: 'Acceseries 4.JPG' },
  { folder: 'accessories', name: 'acc5.jpg', src: 'Acceseries 5.JPG' },
  { folder: 'accessories', name: 'acc6.jpg', src: 'Acceseries 6.JPG' },
  { folder: 'accessories', name: 'acc7.jpg', src: 'Acceseries 7.JPG' },
  { folder: 'accessories', name: 'acc8.jpg', src: 'Acceseries 8.JPG' },
  { folder: 'accessories', name: 'acc9.jpg', src: 'Acceseries 9.JPG' },
];

async function run() {
  for (const item of selections) {
    const outDir = path.join(OUT_BASE, item.folder);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const srcPath = path.join(SRC, item.src);
    const destPath = path.join(outDir, item.name);
    if (!fs.existsSync(srcPath)) { console.warn(`MISSING: ${item.src}`); continue; }
    try {
      const buf = fs.readFileSync(srcPath);
      await sharp(buf).resize({ width: 1400, withoutEnlargement: true }).jpeg({ quality: 82, progressive: true }).toFile(destPath);
      console.log(`✓ ${item.folder}/${item.name}  (${Math.round(fs.statSync(destPath).size/1024)} KB)`);
    } catch (e) { console.error(`✗ ${item.src}:`, e.message); }
  }
  console.log('Done!');
}
run();
