import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	env: {
		APP_ENV: process.env.APP_ENV,
		SERVER_URL: process.env.SERVER_URL
	},
};

export default nextConfig;
