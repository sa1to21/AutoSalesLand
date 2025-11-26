/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable SWC minification (faster than Terser)
  swcMinify: true,

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Performance optimizations
  experimental: {
    // Disabled due to critters dependency issues on Netlify
    // optimizeCss: true,
  },

  // Compression
  compress: true,

  // Production optimizations
  poweredByHeader: false,
}

module.exports = nextConfig
