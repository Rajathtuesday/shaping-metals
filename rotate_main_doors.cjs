const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const dir = path.join(__dirname, 'src', 'assets', 'images', 'main_door');
async function rotate() {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if(f.endsWith('.jpg')) {
      const fullPath = path.join(dir, f);
      const meta = await sharp(fullPath).metadata();
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
