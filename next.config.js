/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Add any image domains you're using
  },

  // Fix for WSL file watching on Windows drives
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      poll: 1000,           // Check for changes every second
      aggregateTimeout: 300, // Delay before rebuilding
    }
    return config
  },
}

module.exports = nextConfig 