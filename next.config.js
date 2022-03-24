/** @type {import('next').NextConfig} */
const withImages = require("next-images")
const nextConfig = {
  reactStrictMode: true
}

module.exports = {
  images: {
    disableStaticImages: true
  }
}

module.exports = (nextConfig,withImages())
