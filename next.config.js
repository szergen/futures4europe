/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    dirs: ['app'],
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'static.wixstatic.com',
      'picsum.photos',
      'placehold.co',
      'randomuser.me',
      'framerusercontent.com',
      'uefiscdi.gov.ro',
      '0bbe2e34-e503-441a-af9e-4fc70c17e6af.usrfiles.com',
      'img.youtube.com',
    ],
    formats: ['image/webp'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
