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
            hostname: 'disflix-anime-media.s3.amazonaws.com',
          },
        ],
      },
};

export default nextConfig;
