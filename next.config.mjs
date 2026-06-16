/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/shailen-portfolio-2002",
  assetPrefix: "/shailen-portfolio-2002",

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;