import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Remove assetPrefix and basePath for custom domain
  // These are only needed for GitHub Pages subdirectories like username.github.io/repo-name
  // For custom domains like tchkpk.com, assets should load from root
};

export default nextConfig;
