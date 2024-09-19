/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [process.env.PUBLIC_IMAGE_DOMAIN],
    },
};

export default nextConfig;
