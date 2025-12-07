import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/IzmirEats',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
