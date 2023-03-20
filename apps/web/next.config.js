/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: './.next',
  output: 'standalone',
  basePath: "",
  cleanDistDir: true,
};

module.exports = nextConfig;
