const path = require('path');
console.log("envs", process.env.NEXT_PRIVATE_STANDALONE, process.env.AMPLIFY_MONOREPO_APP_ROOT)
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: './.next',
  output: 'standalone',
  cleanDistDir: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: {
    // this includes files from the monorepo base two directories up
    outputFileTracingRoot: path.join(__dirname, '../../'),
    outputFileTracingIncludes: {
      '/apps/web': ['./.next/', './node_modules/next'],
    },
  },
};

module.exports = nextConfig;
