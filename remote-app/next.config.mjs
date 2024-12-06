/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote-app",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./button": "./components/Button.tsx",
        },
      })
    );

    return config;
  },
};

export default nextConfig;
