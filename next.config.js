// @ts-nocheck

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const nextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
}

module.exports = nextConfig
