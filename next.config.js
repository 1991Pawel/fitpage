/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["https://fitpage-ten.vercel.app", "media.graphassets.com"],
		formats: ["image/avif", "image/webp"],
	},
};

module.exports = nextConfig;
