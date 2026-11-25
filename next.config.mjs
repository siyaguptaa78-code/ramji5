import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias['@ramji/shared'] = path.resolve(__dirname, 'src/shared');
    return config;
  },
  async redirects() {
    return [
      {
        source: '/blair-tickner-injury-india-vs-new-zealand-second-test',
        destination: '/blog/blair-tickner-injury-india-vs-new-zealand-second-test',
        permanent: true,
      },
      {
        source: '/blair-tickner-injury-india-vs-new-zealand-second-test/',
        destination: '/blog/blair-tickner-injury-india-vs-new-zealand-second-test',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
