import fs from 'fs';
import path from 'path';

const cacheDir = path.join(process.cwd(), 'cache');

export function saveToCache(filename, data) {
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir);
  }
  console.log('Saving to cache:', filename);
  console.log('cacheDir:', cacheDir);
  fs.writeFileSync(path.join(cacheDir, filename), JSON.stringify(data));
}

export function getFromCache(filename) {
  const filePath = path.join(cacheDir, filename);
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, 'utf8');
    console.log('Getting from cache:', filename);
    console.log('cacheDir:', cacheDir);
    return JSON.parse(fileData);
  }
  return null;
}
