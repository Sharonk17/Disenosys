/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // add the host here
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com", // you can add more sources
      },
    ],
  },
};

module.exports = nextConfig;
