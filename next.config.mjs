// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/home?sort=hot',
        permanent: true,
      },
      {
        source: '/thread',
        destination: '/home?sort=hot',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
      },
    ];
  },

  compiler: {
    removeConsole: false,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'k.kakaocdn.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
