/**
 * Optional base path for project Pages without a custom domain.
 * Next/Image does not always prefix public asset URLs with basePath on static export,
 * so we apply it ourselves for public/ files. Empty when using qbtreeservices.com.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  if (basePath && path.startsWith(basePath + "/")) return path;
  return `${basePath}${path}`;
}
