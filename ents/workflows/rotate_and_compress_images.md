---
description: Rotate horizontal images to vertical and compress all assets
---

## Steps
1. **Rotate horizontal images**
   - Run `node setup_images.cjs` to detect images where width > height and rotate them 90° before resizing.
2. **Compress images**
   - Run `node compress.cjs` to resize images to max width 1200px and compress JPEG quality to 80.
3. **Version control**
   - `git add setup_images.cjs compress.cjs`
   - `git commit -m "Rotate horizontal images to vertical and compress assets"`
   - `git push`

// turbo-all

This workflow automates image preparation for the website.
