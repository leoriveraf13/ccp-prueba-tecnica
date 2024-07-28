/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://hanstaging.cuidadoconelperro.com.mx/:path*',
        },
      ];
    },
};

export default nextConfig;