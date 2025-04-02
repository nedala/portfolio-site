/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // ✅ tells Next to statically export the site
    images: {
      unoptimized: true, // ✅ required for static export if using <Image />
    },
  };
  
  module.exports = nextConfig;