import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'preview.redd.it',
      },
      {
        protocol: 'https',
        hostname: 'mystarroom-public-cdn.makestar.com',
      },
      {
        protocol: 'https',
        hostname: 'images2.thanhnien.vn',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'tvtglobal.vn',
      },
      {
        protocol: 'https',
        hostname: 'kenh14cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'bloganchoi.com',
      },
      {
        protocol: 'https',
        hostname: 'www.allkpop.com',
      },
      {
        protocol: 'https',
        hostname: 'sgp1.vultrobjects.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn3.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'photo.znews.vn',
      },
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
      },
      {
        protocol: 'https',
        hostname: 'vi.wowkorea.live',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn2.tuoitre.vn',
      },
      {
        protocol: 'https',
        hostname: 'image.koreaboo.com',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'media-cdn-v2.laodong.vn',
      },
      {
        protocol: 'https',
        hostname: 'image-cdn.essentiallysports.com',
      },
    ],
  },
}

export default nextConfig
