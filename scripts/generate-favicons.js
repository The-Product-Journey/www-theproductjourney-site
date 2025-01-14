import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const sizes = [16, 32, 48, 96, 180, 512];
const inputFile = 'src/assets/product-journey-icon.svg';
const outputDir = 'public/favicons';
const primaryColor = '#6B4E71';

async function generateFavicons() {
  // Ensure output directory exists
  await fs.mkdir(outputDir, { recursive: true });

  // Read and modify SVG content
  let svgContent = await fs.readFile(inputFile, 'utf8');
  svgContent = svgContent.replace('currentColor', primaryColor);

  // Write modified SVG
  await fs.writeFile(path.join(outputDir, 'favicon.svg'), svgContent);

  // Generate PNG files at different sizes using the modified SVG
  const svgBuffer = Buffer.from(svgContent);
  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(outputDir, `favicon-${size}x${size}.png`));
  }

  // Generate apple-touch-icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(outputDir, 'apple-touch-icon.png'));

  console.log('Favicons generated successfully!');
}

generateFavicons().catch(console.error); 