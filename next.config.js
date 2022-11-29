/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

module.exports = {
  images: {
    domains: [
      'api.lorem.space',
      'placeimg.com',
      'loc.ru',
      'm.ru',
      'fikiwiki.com'
    ]
  }
};
