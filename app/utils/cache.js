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
    const keyname = filename?.replace('.json', '');
    console.log('Saving to cache:', keyname);
    const url = `https://api.vercel.com/v1/edge-config/ecfg_faraqet1nujluabkyo1rvv4cbcn0/items`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer b537b555-86c5-42d4-b0ce-4ef2e8792134`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        slug: keyname,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to update Edge Config: ${response.statusText}`);
    }
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
    const keyname = filename?.replace('.json', '');
    console.log('Getting from cache:', keyname);
    return await get(keyname);
  }
}
