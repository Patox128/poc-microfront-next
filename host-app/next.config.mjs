/** @type {import('next').NextConfig} */
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "host-app",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          "remote-app": `remote-app@http://localhost:3001/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
          microfront: "microfront@http://localhost:4201/remoteEntry.js",
        },
        force: true,
        shared: {
          "@angular/core": { singleton: true, strictVersion: true },
          "@angular/common": { singleton: true, strictVersion: true },
        },
        exposes: {},
      })
    );

    // Retorna el objeto `config` modificado
    return config;
  },
};

export default nextConfig;
