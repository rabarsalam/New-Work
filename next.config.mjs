import createNextIntlPlugin from "next-intl/plugin";
import { fileURLToPath } from "url";
import { dirname } from "path";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  output: "export",
  trailingSlash: true,
  // Fixes Turbopack picking the wrong workspace root on Windows
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
  // Optional: set NEXT_PUBLIC_BASE_PATH for GitHub Pages (e.g. /repo-name)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
    ? `${process.env.NEXT_PUBLIC_BASE_PATH}/`
    : "",
};

export default withNextIntl(nextConfig);
