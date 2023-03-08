/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REACT_APP_SITE: process.env.REACT_APP_SITE,
  }
}

module.exports = nextConfig
