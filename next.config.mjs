

/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "1337",
				pathname: "/uploads/**",
			},
			{
				protocol: "https",
				hostname: "api.maivietson.com",
				pathname: "/uploads/**",
			},
			{
				protocol: "https",
				hostname: "maivietson.com",
			},
			{
				protocol: "https",
				hostname: "cssbud.com",
			},
			{
				protocol: "https",
				hostname: "cdn.dribbble.com",
			},
			{
				protocol: "https",
				hostname: "**.pinimg.com",
			},
			{
				protocol: "https",
				hostname: "cliply.co",
			},
			{
				protocol: "https",
				hostname: "**.imgix.net",
			},
			{
				protocol: "https",
				hostname: "**.backlinko.com",
			},
			{
				protocol: "https",
				hostname: "**.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "images.pexels.com",
			},
			{
				protocol: "https",
				hostname: "**.sktelecom.com",
			},
			 {
				protocol: "https",
				hostname: "**.themesberg.com"
			 }
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		})

		return config
	},
	trailingSlash: true,
	// reactStrictMode: false,
}

export default nextConfig
