import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove experimental.runtime - no longer needed in Next.js 15
  // output: process.env.CF_PAGES ? 'export' : undefined,
  output: 'export',
  images: {
    unoptimized: true
  }
  // Add if using Turbopack
  // experimental: process.env.TURBO ? { turbo: {} } : {},
};

module.exports = nextConfig;
