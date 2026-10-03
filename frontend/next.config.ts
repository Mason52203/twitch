import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  // Define production-grade asynchronous URL rewriting gateways [1]
  async rewrites() {
    return [
      {
        // 1. Match any local relative endpoint format inside our project code
        source: "/:path*",
        // 2. Silently proxy and forward traffic directly to the active live production cloud server
        destination: "https://tw-0979b3b56c664db18d340e58b0c6412d.ecs.us-east-2.on.aws/:path*",
      },
    ];
  },
};


export default nextConfig;
