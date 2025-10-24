/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 Enables static export (for GitHub Pages)
  images: {
    unoptimized: true, // 👈 Needed for static export
    domains: ['images.unsplash.com', 'via.placeholder.com'], // keep your allowed domains
  },
  trailingSlash: true, // 👈 Helps with GitHub Pages routing
};

export default nextConfig;
