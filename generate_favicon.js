const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = '/home/aayush/imp/imp/mahaurja/public/assets/images/favicon.png';
const appDir = '/home/aayush/imp/imp/mahaurja/src/app';

async function optimizeFavicon() {
  try {
    if (!fs.existsSync(inputPath)) {
      console.error(`Input file not found: ${inputPath}`);
      return;
    }

    // Generate icon.png (192x192) - Multiple of 48px, standard for modern web apps
    await sharp(inputPath)
      .trim() // Automatically crops away transparent padding
      .resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png({ quality: 100 })
      .toFile(path.join(appDir, 'icon.png'));
    console.log('✅ Generated src/app/icon.png (192x192)');

    // Generate apple-icon.png (180x180) - Required for iOS
    await sharp(inputPath)
      .trim() // Automatically crops away transparent padding
      .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png({ quality: 100 })
      .toFile(path.join(appDir, 'apple-icon.png'));
    console.log('✅ Generated src/app/apple-icon.png (180x180)');

    // Next.js app router automatically generates the correct <link> tags if icon.png is present.
    // We can safely delete the old favicon.ico to force it to use our highly optimized icon.png
    const oldFavicon = path.join(appDir, 'favicon.ico');
    if (fs.existsSync(oldFavicon)) {
      fs.unlinkSync(oldFavicon);
      console.log('✅ Removed old unoptimized favicon.ico');
    }

  } catch (err) {
    console.error('Error:', err);
  }
}

optimizeFavicon();
