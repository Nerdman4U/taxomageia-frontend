/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://localhost:3030/api/:path*`,
			},
		]
	},}

module.exports = nextConfig
