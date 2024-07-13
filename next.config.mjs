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
            hostname: 'd1mad59vqcj3h2.cloudfront.net',
          },
            {
            protocol: 'https',
            hostname: 'images-eu.ssl-images-amazon.com',
          },
        ],
      },
};

export default nextConfig;
