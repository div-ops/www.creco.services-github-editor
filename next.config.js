/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
  const nextConfig = {
    // ...defaultConfig,
    reactStrictMode: true,
    swcMinify: true,
    basePath: "/github-editor",
  };

  return nextConfig;
};
