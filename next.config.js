/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
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
