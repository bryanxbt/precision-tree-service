import type { NextConfig } from "next";

/** Repo name on GitHub (used for project Pages base path). */
const repoName = "precision-tree-service";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Static site so GitHub Pages can host a public preview URL
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isGitHubPages
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
};

export default nextConfig;
