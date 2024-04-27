/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'm.media-amazon.com',
          },
          {
            protocol: 'https',
            hostname: 's3.amazonaws.com',
          },
          {
            protocol: 'https',
            hostname: 'd3d0bkz5kchf6i.cloudfront.net',
          },
        ],
      },
};

export default nextConfig;
