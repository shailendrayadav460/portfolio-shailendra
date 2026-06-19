const isVercel = process.env.VERCEL === '1';
const isDev = process.env.NODE_ENV === 'development';
const isDocker = process.env.DOCKER === '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isDocker ? "standalone" : (isVercel ? undefined : "export"),

  basePath: (isVercel || isDev || isDocker) ? undefined : "/shailen-portfolio-2002",
  assetPrefix: (isVercel || isDev || isDocker) ? undefined : "/shailen-portfolio-2002",

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