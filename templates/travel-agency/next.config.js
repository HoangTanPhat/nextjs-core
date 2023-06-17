/** @type {import('next').NextConfig} */
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  optimizeFonts: true,
  transpilePackages: [
    "@mui/system",
    "@mui/material",
    "@mui/icons-material",
    "@mui/material/styles",
  ],
  // compiler: {
  //   styledComponents: true,
  // },
  output: "standalone",
  experimental: {
    legacyBrowsers: false,
  },

  modularizeImports: {
    "@mui/material/?(((\\w*)?/?)*)": {
      transform:
        "{{#if (eq member 'useTheme')}}@/mui/material/useTheme{{else}}@mui/material/{{ matches.[1] }}/{{member}}{{/if}}",
    },
    "@mui/lab": {
      transform: "@mui/lab/{{member}}",
    },
    "@mui/icons-material/?(((\\w*)?/?)*)": {
      transform: "@mui/icons-material/{{ matches.[1] }}/{{member}}",
    },
    "@mui/material/styles": {
      transform: "@mui/material/styles/{{member}}",
    },
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // if (!isServer) {
    //   config.optimization.splitChunks.cacheGroups = {
    //     ...config.optimization.splitChunks.cacheGroups,
    //     "@mui": {
    //       test: /[\\/]node_modules[\\/](@mui|@mui\/material)[\\/]/,
    //       name: "@mui",
    //       priority: 10,
    //       reuseExistingChunk: false,
    //     },
    //     next: {
    //       test: /[\\/]node_modules[\\/](next)[\\/]/,
    //       name: "next",
    //       priority: 10,
    //       reuseExistingChunk: true,
    //     },
    //     "react-dom": {
    //       test: /[\\/]node_modules[\\/](react-dom)[\\/]/,
    //       name: "react-dom",
    //       priority: 40,
    //       reuseExistingChunk: true,
    //     },
    //   };
    // }

    // config.optimization = {
    //   mergeDuplicateChunks: true,
    // };
    // if (!isServer) {
    //   // Fixes npm packages that depend on `fs` module
    //   // @link https://github.com/vercel/next.js/issues/36514#issuecomment-1112074589
    //   config.resolve.fallback = { ...config.resolve.fallback, fs: false };
    // }

    // config.module.rules.push({
    //   test: /.css$/,
    //   use: [MiniCssExtractPlugin.loader, "css-loader"],
    // });

    config.optimization = {
      mergeDuplicateChunks: true,
      // // minimize: true,
      minimizer: [new TerserPlugin()],
      // runtimeChunk: "single",
      splitChunks: {
        // chunks: "all",
        cacheGroups: {
          "@mui": {
            test: /[\\/]node_modules[\\/](@mui|@mui\/material)[\\/]/,
            name: "mui",
            priority: 10,
            chunks: "initial",
          },
          "react-dom": {
            test: /[\\/]node_modules[\\/](react-dom)[\\/]/,
            name: "react-dom",
            priority: 40,
            chunks: "initial",
          },
        },
      },
    };
    return config;
  },

  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0",
          },
        ],
      },
    ];
  },
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
