/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
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
    "jest",
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
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ["www.youtube.com", "res.cloudinary.com"],
    path: "/_next/image",
    loader: "default",
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: ["image/webp"],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // images: {
  //   // formats: ["image/avif", "image/webp"],
  //   remotePatterns: [
  //     {
  //       protocol: "http",
  //       hostname: "localhost",
  //       port: "1337",
  //       pathname: "/uploads/**",
  //     },
  //   ],
  // },
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

    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: [
        {
          loader: "@svgr/webpack",
          // https://react-svgr.com/docs/webpack/#passing-options
          options: {
            svgo: true,
            // @link https://github.com/svg/svgo#configuration
            svgoConfig: {
              multipass: false,
              datauri: "base64",
              js2svg: {
                indent: 2,
                pretty: false,
              },
            },
            esModule: false,
          },
        },
      ],
    });

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
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
