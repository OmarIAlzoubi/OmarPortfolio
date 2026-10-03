import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./editorial.css";
import { profile } from "@/data/portfolio";
import { getSiteUrl, getPageUrl } from "@/lib/site";
const geist = localFont({
  src: "../node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2",
  variable: "--font-geist",
  display: "swap",
  weight: "100 900",
});
const siteUrl = getSiteUrl();
export const metadata: Metadata = {
  metadataBase: siteUrl ?? new URL("http://localhost:3000"),
  ...(siteUrl ? { alternates: { canonical: getPageUrl("") } } : {}),
  title: { default: "Omar Al-Zoubi — AI Engineer", template: "%s — Omar Al-Zoubi" },
  description: profile.description,
  authors: [{ name: profile.name }],
  keywords: [
    "AI Engineer",
    "Generative AI",
    "LLM",
    "RAG",
    "Agentic AI",
    "Voice AI",
    "Multimodal AI",
    "Omar Al-Zoubi",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Omar Al-Zoubi — AI Engineer",
    description: profile.description,
    siteName: profile.name,
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Al-Zoubi — AI Engineer",
    description: profile.description,
  },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f8f7f2" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} without-chat`}>
        {children}
      </body>
    </html>
  );
}
