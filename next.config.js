/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.geeksforgeeks.org',
          port: '',
          pathname: '',
        },
      ],
    },
  }

module.exports = nextConfig
