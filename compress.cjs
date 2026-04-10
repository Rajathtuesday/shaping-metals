const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'src', 'assets', 'images');

async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (file.match(/\.(jpg|jpeg|png|webp|avif)$/i)) {
      console.log(`Compressing ${fullPath}`);
      const processName = fullPath + '.tmp.jpg';
      try {
        const fileBuffer = fs.readFileSync(fullPath);
        await sharp(fileBuffer)
          .resize({ width: 1200, withoutEnlargement: true })
          .jpeg({ quality: 80, progressive: true })
          .toFile(processName);
        fs.unlinkSync(fullPath);
        fs.renameSync(processName, fullPath);
        console.log(`Successfully compressed ${file}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
        if (fs.existsSync(processName)) fs.unlinkSync(processName);
      }
    }
  }
}

processDirectory(dir).then(() => console.log('Done')).catch(console.error);
