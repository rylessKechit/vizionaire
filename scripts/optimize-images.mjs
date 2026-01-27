import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

async function optimizeImages() {
  console.log('Optimizing background image...');

  // Optimize background-cityscape.jpg -> webp (quality 80, resize to 1920px max width)
  await sharp(join(publicDir, 'background-cityscape.jpg'))
    .resize(1920, null, { withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(join(publicDir, 'background-cityscape.webp'));

  console.log('Created background-cityscape.webp');

  // Create a smaller version for mobile (max 768px)
  await sharp(join(publicDir, 'background-cityscape.jpg'))
    .resize(768, null, { withoutEnlargement: true })
    .webp({ quality: 70 })
    .toFile(join(publicDir, 'background-cityscape-mobile.webp'));

  console.log('Created background-cityscape-mobile.webp');

  // Also create optimized JPG fallback
  await sharp(join(publicDir, 'background-cityscape.jpg'))
    .resize(1920, null, { withoutEnlargement: true })
    .jpeg({ quality: 75, progressive: true })
    .toFile(join(publicDir, 'background-cityscape-optimized.jpg'));

  console.log('Created background-cityscape-optimized.jpg');

  console.log('Done!');
}

optimizeImages().catch(console.error);
