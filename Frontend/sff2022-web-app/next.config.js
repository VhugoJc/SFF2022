/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  outputFileTracingRoot: __dirname,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    // Optimizaciones del compilador para Node.js 22
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    unoptimized: true, // Necesario para export estático
  },
  distDir: '.next',
}

module.exports = nextConfig
