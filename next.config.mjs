/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**", // Allow any path from picsum.photos
      },
    ],
  },
  eslint: {
    dirs: ["pages", "utils", "app"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
};

export default nextConfig;
