import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["rickandmortyapi.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        pathname: "/api/character/avatar/**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(gql|graphql)$/,
      exclude: /node_modules/,
      use: {
        loader: "graphql-tag/loader",
      },
    });

    return config;
  },
};

export default nextConfig;
