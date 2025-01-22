/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.srlchem.com',
      },
      {
        protocol: 'https',
        hostname: 'www.sigmaaldrich.com',
      },
    ],
  },
  // Disable SWC minification
  swcMinify: false,
};

module.exports = nextConfig;
