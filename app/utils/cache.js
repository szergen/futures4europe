import fs from 'fs';
import path from 'path';
import { set, get } from '@vercel/edge-config';

const cacheDir = path.join(process.cwd(), 'cache');

export async function saveToCache(filename, data) {
  if (process.env.NEXT_PUBLIC_NODE_ENV === 'localhost') {
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir);
    }
    console.log('Saving to cache:', filename);
    console.log('cacheDir:', cacheDir);
    fs.writeFileSync(path.join(cacheDir, filename), JSON.stringify(data));
  } else {
    await set(filename?.replace('.json', ''), data);
  }
}

export async function getFromCache(filename) {
  if (process.env.NEXT_PUBLIC_NODE_ENV === 'localhost') {
    const filePath = path.join(cacheDir, filename);
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      console.log('Getting from cache:', filename);
      console.log('cacheDir:', cacheDir);
      return JSON.parse(fileData);
    }
    return null;
  } else {
    return await get(filename?.replace('.json', ''));
  }
}
