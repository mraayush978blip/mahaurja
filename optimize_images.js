const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'assets', 'images');

const images = [
  'mapdes.png',
  'mapp.png',
  'about.png',
  'hero-bg.jpg',
  'mahaurja.png',
  'mahaurja1.png'
];

async function optimizeImages() {
  for (const file of images) {
    const inputPath = path.join(imgDir, file);
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping ${file} - not found`);
      continue;
    }

    const ext = path.extname(file);
    const basename = path.basename(file, ext);
    const outputPath = path.join(imgDir, `${basename}.webp`);

    console.log(`Processing ${file}...`);
    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      const stats = fs.statSync(outputPath);
      const originalStats = fs.statSync(inputPath);
      console.log(`✅ Converted ${file} -> ${basename}.webp`);
      console.log(`   Original: ${(originalStats.size / 1024 / 1024).toFixed(2)} MB`);
      console.log(`   Optimized: ${(stats.size / 1024).toFixed(2)} KB\n`);
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err);
    }
  }
}

optimizeImages();
