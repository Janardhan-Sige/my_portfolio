/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/my_portfolio",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
