export function getSiteUrl(): URL | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configured) return undefined;
  const url = new URL(configured);
  if (!["https:", "http:"].includes(url.protocol)) throw new Error("Invalid site URL");
  // The workflow supplies the full Pages URL, including the repository path.
  url.pathname = `${(process.env.NEXT_PUBLIC_BASE_PATH ?? url.pathname).replace(/\/+$/, "")}/`;
  url.search = "";
  url.hash = "";
  return url;
}
export function getPageUrl(relative: string): string | undefined {
  const site = getSiteUrl();
  return site ? new URL(relative, site).href : undefined;
}
