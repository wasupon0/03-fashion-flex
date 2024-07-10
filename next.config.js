/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.imagin.studio",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "api.escuelajs.co",
      },
      {
        protocol: "https",
        hostname: "placeimg.com",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
    ],
  },
};

module.exports = nextConfig;
