import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Function to convert HEIF/HEIC to WebP
async function convertImageToWebP(inputPath, outputPath, quality = 80) {
  try {
    await sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath);
    console.log(`Converted: ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error.message);
  }
}

// Function to process all images in a directory
async function processDirectory(directoryPath) {
  try {
    const files = fs.readdirSync(directoryPath);
    
    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await processDirectory(filePath);
      } else if (file.toLowerCase().endsWith('.heif') || file.toLowerCase().endsWith('.heic')) {
        const outputPath = filePath.replace(/\.(heif|heic)$/i, '.webp');
        await convertImageToWebP(filePath, outputPath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directoryPath}:`, error.message);
  }
}

// Main function
async function main() {
  const imagesDir = path.join(process.cwd(), 'src/images');
  
  if (fs.existsSync(imagesDir)) {
    console.log('Starting image conversion...');
    await processDirectory(imagesDir);
    console.log('Image conversion completed!');
  } else {
    console.log('Images directory not found:', imagesDir);
  }
}

// Run if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { convertImageToWebP, processDirectory };