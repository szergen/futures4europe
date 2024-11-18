import fs from 'fs';
import path from 'path';
import { Redis } from '@upstash/redis';

const cacheDir = path.join(process.cwd(), 'cache');
// Initialize Redis
// const redis =
//   process.env.NEXT_PUBLIC_NODE_ENV === 'localhost'
//     ? new Redis({
//         url: 'redis://localhost:6379',
//       })
//     : Redis.fromEnv();
const redis = Redis.fromEnv();

export async function saveToCache(filename, data) {
  // if (process.env.NEXT_PUBLIC_NODE_ENV === 'localhost') {
  //   if (!fs.existsSync(cacheDir)) {
  //     fs.mkdirSync(cacheDir);
  //   }
  //   console.log('Saving to cache:', filename);
  //   console.log('cacheDir:', cacheDir);
  //   fs.writeFileSync(path.join(cacheDir, filename), JSON.stringify(data));
  // } else {
  const keyname = filename?.replace('.json', '');
  console.log('Saving to cache:', keyname);
  const result = await redis.set(keyname, JSON.stringify(data));
  console.log('result:', result);

  if (!response.ok) {
    throw new Error(`Failed to update Edge Config: ${response.statusText}`);
  }
  // }
}

export async function getFromCache(filename) {
  // if (process.env.NEXT_PUBLIC_NODE_ENV === 'localhost') {
  //   const filePath = path.join(cacheDir, filename);
  //   if (fs.existsSync(filePath)) {
  //     const fileData = fs.readFileSync(filePath, 'utf8');
  //     console.log('Getting from cache:', filename);
  //     console.log('cacheDir:', cacheDir);
  //     return JSON.parse(fileData);
  //   }
  //   return null;
  // } else {
  const keyname = filename?.replace('.json', '');
  console.log('Getting from cache:', keyname);
  return await redis.get(keyname);
  // }
}
