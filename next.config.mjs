/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Do not fail the build on ESLint warnings during CI/CD deployment
    ignoreDuringBuilds: true,
  },
  images: {
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
