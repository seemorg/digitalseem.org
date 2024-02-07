import { config } from "@/lib/config";

const routes = ["/"];

export default async function sitemap() {
  const entries = routes.map((route) => ({
    url: `${config.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...entries];
}
