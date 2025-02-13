import { siteConfig } from "@/lib/config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
