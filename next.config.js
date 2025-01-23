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
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        os: false,
        path: false,
        stream: false,
        util: false,
        buffer: false,
        http: false,
        https: false,
        url: false,
      };
    }
    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ['firebase', 'firebase-admin']
  }
};

module.exports = nextConfig;
