/**
 * GitHub Pages serves the site under /precision-tree-service.
 * Next/Image does not always prefix public asset URLs with basePath on static export,
 * so we apply it ourselves for public/ files.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  if (basePath && path.startsWith(basePath + "/")) return path;
  return `${basePath}${path}`;
}
