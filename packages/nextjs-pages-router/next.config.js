/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  optimizeFonts: true,
  transpilePackages: ["@mui/material"],
  // compiler: {
  //   styledComponents: true,
  // },
  output: "standalone",
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.optimization = {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
      },
    };

    config.module.rules.push({
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, "src", "client")],
      use: [
        {
          loader: "babel-loader",
          options: {
            plugins: [["import", { libraryName: "antd", style: true }, "antd"]],
          },
        },
      ],
    });
    // if (!isServer) {
    //   // Fixes npm packages that depend on `fs` module
    //   // @link https://github.com/vercel/next.js/issues/36514#issuecomment-1112074589
    //   config.resolve.fallback = { ...config.resolve.fallback, fs: false };
    // }
    return config;
  },
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
