const isVercel = process.env.VERCEL === '1';
const isDev = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isVercel ? undefined : "export",

  basePath: (isVercel || isDev) ? undefined : "/shailen-portfolio-2002",
  assetPrefix: (isVercel || isDev) ? undefined : "/shailen-portfolio-2002",

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