const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const dir = path.join(__dirname, 'src', 'assets', 'images', 'gates');
async function rotate() {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if(f.endsWith('.jpg')) {
      const fullPath = path.join(dir, f);
      const meta = await sharp(fullPath).metadata();
      // If width > height, it's horizontal, we want vertical doors!
      if (meta.width > meta.height) {
        console.log(`Rotating ${f}`);
        const tmpPath = fullPath + '.tmp.jpg';
        try {
          await sharp(fullPath)
            .rotate(90)
            .toFile(tmpPath);
          fs.unlinkSync(fullPath);
          fs.renameSync(tmpPath, fullPath);
          console.log(`Successfully rotated ${f}`);
        } catch (err) {
          console.error(`Error rotating ${f}:`, err);
        }
      }
    }
  }
}
rotate();
