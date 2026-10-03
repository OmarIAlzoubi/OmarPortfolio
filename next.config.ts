import type { NextConfig } from "next";
import path from "node:path";

const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");
if (basePath && !/^\/(?:[A-Za-z0-9._-]+)(?:\/[A-Za-z0-9._-]+)*$/.test(basePath)) {
  throw new Error("NEXT_PUBLIC_BASE_PATH must be empty or a path such as /OmarPortfolio");
}
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  // Next.js applies basePath to _next assets; a separate CDN assetPrefix is unnecessary.
  images: { unoptimized: true },
  poweredByHeader: false,
  turbopack: { root: path.resolve(process.cwd()) },
};
export default config;
