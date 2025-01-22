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
};

module.exports = nextConfig;
