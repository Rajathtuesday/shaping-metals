/**
 * compress-assets.cjs
 * Compresses all images (jpg/png/webp) and videos (mp4/mov) in src/assets
 * Images: uses sharp — already a project dependency
 * Videos: uses ffmpeg — must be installed separately (https://ffmpeg.org/download.html)
 *
 * Usage:  node compress-assets.cjs
 * Safe:   originals are overwritten in-place (backs up first to *.bak if needed)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const sharp = require('sharp');

const ASSETS_DIR = path.join(__dirname, 'src', 'assets');

// ─── Image settings ───────────────────────────────────────────────
const IMAGE_CONFIG = {
  maxWidth: 1920,       // won't upscale smaller images
  jpegQuality: 82,      // 80-85 is visually near-lossless
  progressive: true,
};

// ─── Video settings ───────────────────────────────────────────────
const VIDEO_CONFIG = {
  crf: 28,              // 23=default, 28=good compression, 35=aggressive (lower = better quality)
  preset: 'slow',       // slow gives better compression at same quality
  maxWidth: 1920,
};

let imageCount = 0;
let videoCount = 0;
let imageSavedBytes = 0;
let videoSavedBytes = 0;

// ─── Check ffmpeg ─────────────────────────────────────────────────
function isFfmpegAvailable() {
  try {
    execSync('ffmpeg -version', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

// ─── Format bytes ─────────────────────────────────────────────────
function fmt(bytes) {
  return (bytes / 1024 / 1024).toFixed(1) + 'MB';
}

// ─── Image compression ────────────────────────────────────────────
async function compressImage(filePath) {
  const originalSize = fs.statSync(filePath).size;
  const tmpPath = filePath + '.tmp';

  try {
    await sharp(filePath)
      .resize({ width: IMAGE_CONFIG.maxWidth, withoutEnlargement: true })
      .jpeg({ quality: IMAGE_CONFIG.jpegQuality, progressive: IMAGE_CONFIG.progressive })
      .toFile(tmpPath);

    const newSize = fs.statSync(tmpPath).size;

    // Only replace if we actually saved meaningful space (>5%)
    if (newSize < originalSize * 0.95) {
      fs.unlinkSync(filePath);
      fs.renameSync(tmpPath, filePath);
      const saved = originalSize - newSize;
      imageSavedBytes += saved;
      imageCount++;
      console.log(`  ✓ ${path.basename(filePath)}: ${fmt(originalSize)} → ${fmt(newSize)} (-${Math.round((saved / originalSize) * 100)}%)`);
    } else {
      fs.unlinkSync(tmpPath);
      console.log(`  → ${path.basename(filePath)}: already optimised, skipped`);
    }
  } catch (err) {
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    console.error(`  ✗ ${path.basename(filePath)}: ${err.message}`);
  }
}

// ─── Video compression ────────────────────────────────────────────
function compressVideo(filePath, ffmpegAvailable) {
  if (!ffmpegAvailable) {
    console.log(`  ⚠ Skipping ${path.basename(filePath)} — ffmpeg not found`);
    return;
  }

  const originalSize = fs.statSync(filePath).size;
  const ext = path.extname(filePath).toLowerCase();

  // Always output as mp4
  const outPath = filePath.replace(/\.(mov|mp4|avi|mkv)$/i, '.compressed.mp4');

  try {
    console.log(`  Compressing ${path.basename(filePath)}... (this may take a minute)`);
    const scale = `scale='min(${VIDEO_CONFIG.maxWidth},iw)':-2`;
    execSync(
      `ffmpeg -y -i "${filePath}" -vcodec libx264 -crf ${VIDEO_CONFIG.crf} -preset ${VIDEO_CONFIG.preset} -vf "${scale}" -movflags +faststart -acodec aac -b:a 128k "${outPath}"`,
      { stdio: 'inherit' }
    );

    const newSize = fs.statSync(outPath).size;

    if (newSize < originalSize * 0.95) {
      // Replace original (rename compressed over it)
      const finalPath = filePath.replace(/\.(mov|mp4|avi|mkv)$/i, '.mp4');
      if (ext !== '.mp4') {
        // MOV → mp4: keep original MOV as backup
        fs.renameSync(outPath, finalPath);
        console.log(`  ✓ ${path.basename(filePath)}: ${fmt(originalSize)} → ${fmt(newSize)} (-${Math.round(((originalSize - newSize) / originalSize) * 100)}%) → saved as ${path.basename(finalPath)}`);
      } else {
        fs.unlinkSync(filePath);
        fs.renameSync(outPath, filePath);
        console.log(`  ✓ ${path.basename(filePath)}: ${fmt(originalSize)} → ${fmt(newSize)} (-${Math.round(((originalSize - newSize) / originalSize) * 100)}%)`);
      }
      videoSavedBytes += originalSize - newSize;
      videoCount++;
    } else {
      fs.unlinkSync(outPath);
      console.log(`  → ${path.basename(filePath)}: already well-compressed, skipped`);
    }
  } catch (err) {
    if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
    console.error(`  ✗ ${path.basename(filePath)}: ${err.message}`);
  }
}

// ─── Walk directory ───────────────────────────────────────────────
async function processDirectory(dir, ffmpegAvailable) {
  let entries;
  try {
    entries = fs.readdirSync(dir);
  } catch {
    return;
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath, ffmpegAvailable);
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(entry)) {
      await compressImage(fullPath);
    } else if (/\.(mp4|mov|avi|mkv)$/i.test(entry)) {
      compressVideo(fullPath, ffmpegAvailable);
    }
  }
}

// ─── Main ─────────────────────────────────────────────────────────
async function main() {
  console.log('🔧 Shaping Metals — Asset Compressor\n');

  const ffmpegAvailable = isFfmpegAvailable();
  if (!ffmpegAvailable) {
    console.log('⚠️  ffmpeg not found — videos will be skipped.');
    console.log('   Install from: https://ffmpeg.org/download.html\n');
  } else {
    console.log('✅ ffmpeg detected — images + videos will be compressed.\n');
  }

  console.log(`📁 Scanning: ${ASSETS_DIR}\n`);
  await processDirectory(ASSETS_DIR, ffmpegAvailable);

  console.log('\n─────────────────────────────────────');
  console.log(`✅ Done!`);
  if (imageCount > 0) console.log(`   Images compressed : ${imageCount} files, saved ${fmt(imageSavedBytes)}`);
  if (videoCount > 0) console.log(`   Videos compressed : ${videoCount} files, saved ${fmt(videoSavedBytes)}`);
  const total = imageSavedBytes + videoSavedBytes;
  if (total > 0) console.log(`   Total saved        : ${fmt(total)}`);
  console.log('─────────────────────────────────────\n');
}

main().catch(console.error);
