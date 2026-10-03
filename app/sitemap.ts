import type { MetadataRoute } from "next";
import { getPageUrl } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const home = getPageUrl("");
  const resume = getPageUrl("resume/");
  return home && resume ? [{ url: home, priority: 1 }, { url: resume, priority: 0.6 }] : [];
}
