import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const trainersDir = path.join(__dirname, '../public/images/Trainers');

// Define the old and new file names
const fileRenames = [
  {
    old: "Hamrawit Gizaw \nHEAD COACH.webp",
    new: "hamrawit-gizaw-head-coach.webp"
  },
  {
    old: "Lina tesfayee\nSTRENGTH TRAINER.webp",
    new: "lina-tesfayee-strength-trainer.webp"
  },
  {
    old: "SELAM AYELE\nKIKBOXING & STRENGTH\nTRAINER.webp",
    new: "selam-ayele-kikboxing-strength-trainer.webp"
  }
];

fileRenames.forEach(({ old, new: newName }) => {
  const oldPath = path.join(trainersDir, old);
  const newPath = path.join(trainersDir, newName);
  
  if (fs.existsSync(oldPath)) {
    try {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${old} -> ${newName}`);
    } catch (error) {
      console.error(`Error renaming ${old}:`, error.message);
    }
  } else {
    console.log(`File not found: ${old}`);
  }
});