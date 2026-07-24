import type { NextConfig } from "next";

/** Repo name on GitHub (used for project Pages base path). */
const repoName = "precision-tree-service";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  // Static site so GitHub Pages can host a public preview URL
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // Used by withBasePath() for public/ image URLs
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isGitHubPages
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
};

export default nextConfig;
