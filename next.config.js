/** @type {import('next').NextConfig} */
const nextConfig = {
  ssr: false,
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:8000/:path*',
        },
      ]
    },
}

module.exports = nextConfig
