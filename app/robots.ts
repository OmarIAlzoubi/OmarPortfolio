import type { MetadataRoute } from "next";
import { getPageUrl } from "@/lib/site";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  const sitemap = getPageUrl("sitemap.xml");
  return { rules: { userAgent: "*", allow: "/" }, ...(sitemap ? { sitemap } : {}) };
}
