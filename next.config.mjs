const isVercel = process.env.VERCEL === '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: isVercel ? undefined : "/shailen-portfolio-2002",
  assetPrefix: isVercel ? undefined : "/shailen-portfolio-2002",

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