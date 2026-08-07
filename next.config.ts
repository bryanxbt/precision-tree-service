import type { NextConfig } from "next";

/**
 * Optional path prefix for project Pages without a custom domain
 * (e.g. username.github.io/qb-tree-services). Leave unset for
 * qbtreeservices.com, which is served at the domain root.
 */
const repoName = "qb-tree-services";
const isProjectPath = process.env.GITHUB_PAGES === "true";
const basePath = isProjectPath ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // Used by withBasePath() for public/ image URLs
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isProjectPath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
};

export default nextConfig;
