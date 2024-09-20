/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                // hostname: process.env.PUBLIC_IMAGE_DOMAIN,
                hostname: 'fakestoreapi.com',
                port: '',
                pathname: '/img/**',
            },
        ],
    },
};

export default nextConfig;


