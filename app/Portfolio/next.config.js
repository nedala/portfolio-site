/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true, // ✅ required for static export if using <Image />
    },
    staticPageGenerationTimeout: 60, // ✅ Increases timeout for large video files
  };
  
module.exports = nextConfig;