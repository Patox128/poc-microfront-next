/** @type {import('next').NextConfig} */
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "host-app2",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          "remote-app": `remote-app@http://localhost:3001/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
        },
        force: true,
        shared: {},
        exposes: {},
      })
    );

    // Retorna el objeto `config` modificado
    return config;
  },
};

export default nextConfig;
