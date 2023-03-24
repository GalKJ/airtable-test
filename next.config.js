/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    AIRTABLE_KEY: process.env.AIRTABLE_KEY,
  },
};

module.exports = nextConfig;
