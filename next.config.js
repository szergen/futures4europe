/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ['app'],
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['static.wixstatic.com', 'picsum.photos', 'placehold.co'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
