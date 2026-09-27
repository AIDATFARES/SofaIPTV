import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 240, 320],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/how-to-test-iptv-before-buying-a-subscription",
        destination: "/blog/how-to-test-iptv-before-buying",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-players-for-android-tv-2026",
        destination: "/blog/best-iptv-players-for-android-tv",
        permanent: true,
      },
      {
        source: "/blog/iptv-login-failed-username-password-server-url-fixes",
        destination: "/blog/fix-iptv-login-failed-errors",
        permanent: true,
      },
      {
        source: "/blog/iptv-not-working-after-an-app-update",
        destination: "/blog/iptv-not-working-after-app-update",
        permanent: true,
      },
      {
        source: "/blog/iptv-buffering-every-few-minutes-causes-and-fixes",
        destination: "/blog/fix-iptv-buffering-every-few-minutes",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-players-for-firestick-2026",
        destination: "/blog/best-iptv-players-for-firestick",
        permanent: true,
      },
      {
        source: "/blog/iptv-channels-not-loading-10-things-to-check",
        destination: "/blog/iptv-channels-not-loading-fixes",
        permanent: true,
      },
      {
        source: "/blog/how-to-set-up-iptv-on-firestick-2026",
        destination: "/blog/how-to-set-up-iptv-on-firestick",
        permanent: true,
      },
      {
        source: "/blog/iptv-epg-explained-how-it-works-and-fix-epg-issues",
        destination: "/blog/iptv-epg-explained-guide",
        permanent: true,
      },
      {
        source: "/blog/iptv-epg-not-working-2026",
        destination: "/blog/fix-iptv-epg-not-working",
        permanent: true,
      },
      {
        source: "/blog/iptv-channel-switching-slow",
        destination: "/blog/fix-slow-iptv-channel-switching",
        permanent: true,
      },
      {
        source: "/blog/iptv-audio-video-out-of-sync",
        destination: "/blog/fix-iptv-audio-video-sync",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

