/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    serverRuntimeConfig: {
      CRUD_PATH: process.env.CRUD_PATH ? process.env.CRUD_PATH : 'REPLACE_SERVER_ENV_CRUD_PATH',
    },
  }
  
  module.exports = nextConfig
  