/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    eslint: {
      ignoreDuringBuilds: true,
    },
    serverRuntimeConfig: {
      CRUD_PATH: process.env.CRUD_PATH ? process.env.CRUD_PATH : 'REPLACE_SERVER_ENV_CRUD_PATH',
    },
  }
  
  module.exports = nextConfig