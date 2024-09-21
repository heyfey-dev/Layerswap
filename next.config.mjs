/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["layerswap.io", 'prodlslayerswapbridgesa.blob.core.windows.net'],
  },
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

export default nextConfig;
