/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
	swcMinify: true,
	images: {
		domains: ['raw.githubusercontent.com']
	},
	experimental: {
		// Required:
		appDir: true
	}
}

module.exports = nextConfig
