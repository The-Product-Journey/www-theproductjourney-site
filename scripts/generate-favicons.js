import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const sizes = [16, 32, 48, 96, 180, 512];
const inputFile = 'src/assets/product-journey-icon.svg';
const outputDir = 'public/favicons';

async function generateFavicons() {
  // Ensure output directory exists
  await fs.mkdir(outputDir, { recursive: true });

  // Generate PNG files at different sizes
  for (const size of sizes) {
    await sharp(inputFile)
      .resize(size, size)
      .png()
      .toFile(path.join(outputDir, `favicon-${size}x${size}.png`));
  }

  // Generate apple-touch-icon
  await sharp(inputFile)
    .resize(180, 180)
    .png()
    .toFile(path.join(outputDir, 'apple-touch-icon.png'));

  // Copy SVG to output directory
  await fs.copyFile(inputFile, path.join(outputDir, 'favicon.svg'));

  console.log('Favicons generated successfully!');
}

generateFavicons().catch(console.error); 