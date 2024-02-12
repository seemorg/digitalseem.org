import { config } from "@/lib/config";
import { CAREERS_PAGE_REVALIDATE } from "@/lib/constants";
import { getOpenCareers } from "@/lib/notion";

const routes = ["/", "/careers"];

export const revalidate = CAREERS_PAGE_REVALIDATE;

export default async function sitemap() {
  const entries = routes.map((route) => ({
    url: `${config.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const careerEntries = (await getOpenCareers()).jobs.map((job) => ({
    url: `${config.url}/careers/${job.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...entries, ...careerEntries];
}
