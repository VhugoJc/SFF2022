/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    turbo: {
      // Aprovecha Turbopack para builds más rápidos con Node.js 22
    },
  },
  compiler: {
    // Optimizaciones del compilador para Node.js 22
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    unoptimized: true, // Necesario para export estático
  },
}

module.exports = nextConfig
