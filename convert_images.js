import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target directories / files to scan
const SCAN_EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const IGNORED_DIRS = ['node_modules', '.git', 'dist'];

async function getFiles(dir) {
  const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      if (!IGNORED_DIRS.includes(dirent.name)) {
        files.push(...(await getFiles(res)));
      }
    } else {
      const ext = path.extname(dirent.name).toLowerCase();
      if (SCAN_EXTENSIONS.includes(ext)) {
        files.push(res);
      }
    }
  }
  return files;
}

async function convertImage(filePath) {
  const ext = path.extname(filePath);
  const dir = path.dirname(filePath);
  const baseName = path.basename(filePath, ext).trim(); // trim any accidental leading/trailing spaces
  const outputPath = path.join(dir, `${baseName}.webp`);

  const originalStats = await fs.promises.stat(filePath);
  const originalSize = originalStats.size;

  try {
    // Process with sharp for optimal quality & size
    await sharp(filePath)
      .webp({
        quality: 82,
        effort: 6,
        alphaQuality: 90
      })
      .toFile(outputPath);

    const newStats = await fs.promises.stat(outputPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`✅ Converted: ${path.basename(filePath)}`);
    console.log(`   ➔ ${path.basename(outputPath)}: ${(originalSize / 1024).toFixed(1)} KB ➔ ${(newSize / 1024).toFixed(1)} KB (-${savings}%)`);

    // Remove old unoptimized image if it's not the public fallback logo.png
    const isPublicLogoPng = filePath.endsWith(path.join('public', 'logo.png'));
    if (!isPublicLogoPng) {
      await fs.promises.unlink(filePath);
      console.log(`   🗑️ Removed raw source file: ${path.basename(filePath)}`);
    }

    return {
      originalSize,
      newSize,
      savedBytes: originalSize - newSize
    };
  } catch (error) {
    console.error(`❌ Failed to convert ${filePath}:`, error.message);
    return null;
  }
}

async function run() {
  console.log('==============================================');
  console.log('⚡ OPTIMIZING IMAGES TO WEBP FORMAT');
  console.log('==============================================\n');

  const files = await getFiles(__dirname);
  console.log(`🔍 Found ${files.length} non-WebP image(s) to optimize...\n`);

  let totalOriginal = 0;
  let totalNew = 0;
  let convertedCount = 0;

  for (const file of files) {
    const result = await convertImage(file);
    if (result) {
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
      convertedCount++;
    }
  }

  const totalSaved = totalOriginal - totalNew;
  console.log('\n==============================================');
  console.log(`🎉 COMPLETED: ${convertedCount} images converted to WebP`);
  console.log(`📦 Original Total Size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`🚀 Optimized WebP Size: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💾 Total Space Saved:   ${(totalSaved / 1024 / 1024).toFixed(2)} MB (${((totalSaved / totalOriginal) * 100).toFixed(1)}% reduction)`);
  console.log('==============================================');
}

run();
