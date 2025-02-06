import { siteConfig } from "@/lib/config";
import { getOpenCareers } from "@/lib/notion";

const routes = ["/", "/careers"];

export const revalidate = 1200; // 20 mins

export default async function sitemap() {
  const entries = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const careerEntries = (await getOpenCareers()).jobs.map((job) => ({
    url: `${siteConfig.url}/careers/${job.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...entries, ...careerEntries];
}
