/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prodlslayerswapbridgesa.blob.core.windows.net",
        port: "",
        pathname: "/layerswap/**", // This will match both /currencies and /networks
      },
      {
        protocol: "https",
        hostname: "layerswap.io",
        port: "",
        pathname: "/app/_next/image", // This will allow fetching from the layerswap.io domain
      },
    ],
  },
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

export default nextConfig;
