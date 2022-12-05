/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  basePath: "/returning-users",
  async redirects() {
    return [];
  },
};
