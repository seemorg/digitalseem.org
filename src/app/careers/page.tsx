import { compileMarkdown } from "@/lib/md";
import { getOpenCareers } from "@/lib/notion";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Pill from "@/components/ui/pill";
import { getMetadata } from "@/lib/config";
import { CAREERS_PAGE_REVALIDATE } from "@/lib/constants";

export const revalidate = CAREERS_PAGE_REVALIDATE;

export async function generateMetadata() {
  const { description } = await getOpenCareers();
  return getMetadata({ title: "Careers", description });
}

export default async function CareersPage() {
  const careers = await getOpenCareers();

  return (
    <div className="min-h-[50vh]">
      <h1 className="text-4xl font-bold">Careers</h1>
      {careers.description && (
        <div className="mt-2 text-lg">
          {await compileMarkdown(careers.description)}
        </div>
      )}

      {careers.mission && (
        <div className="mt-4 text-lg">
          {await compileMarkdown(careers.mission)}
        </div>
      )}

      <ul className="mt-20 flex flex-col gap-5">
        {careers.jobs.map((job) => (
          <Link
            href={`/careers/${job.slug}`}
            key={job.slug}
            className="flex w-full flex-col justify-between rounded-md bg-primary-100/5 px-8 py-8 transition-colors hover:bg-primary-100/10 sm:flex-row sm:items-center"
          >
            <div>
              <h3>{job.title}</h3>
              <div className="mt-3 flex items-center gap-3 sm:mt-7">
                {job.type && <Pill>{job.type}</Pill>}
                {job.location && <Pill>{job.location}</Pill>}
              </div>
            </div>

            <p className="mt-10 flex items-center gap-2 text-lg sm:mt-0">
              Read more
              <ArrowRightIcon className="h-5 w-5" />
            </p>
          </Link>
        ))}
      </ul>

      <div className="h-32" />
    </div>
  );
}
