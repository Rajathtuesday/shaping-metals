const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const dir = path.join(__dirname, 'src', 'assets', 'images', 'gates');
async function check() {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if(f.endsWith('.jpg')) {
      try {
        const meta = await sharp(path.join(dir, f)).metadata();
        console.log(`${f}: ${meta.width}x${meta.height}`);
      } catch (err) {
        console.error(`Error reading ${f}:`, err);
      }
    }
  }
}
check();
