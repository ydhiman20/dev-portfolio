/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["pages", "utils", "app"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
        pathname: "/**", // Allow any path from picsum.photos
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;