import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/mental-health-center/' : '',
  basePath: isProd ? '/mental-health-center' : '',
  output: 'export'
};

export default nextConfig;