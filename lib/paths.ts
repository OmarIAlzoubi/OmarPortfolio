/** Prefix public assets only. next/link prefixes page routes automatically. */
export function publicPath(asset: string): string {
  if (!asset.startsWith("/") || asset.startsWith("//")) return asset;
  return (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "") + asset;
}
