/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `http://localhost:3030/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
