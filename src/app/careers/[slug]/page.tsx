import Pill from "@/components/ui/pill";
import { getMetadata } from "@/lib/config";
import { CAREERS_PAGE_REVALIDATE } from "@/lib/constants";
import { compileMarkdown } from "@/lib/md";
import { getOpenCareers } from "@/lib/notion";
import { notFound } from "next/navigation";

export const revalidate = CAREERS_PAGE_REVALIDATE;
export const dynamicParams = true; // Allow params that are not statically known at build time

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const { jobs, description } = await getOpenCareers();
  const career = jobs.find((job) => job.slug === params.slug);

  if (!career) return {};

  return getMetadata({ title: career.title, description });
}

export async function generateStaticParams(): Promise<PageProps[]> {
  const careers = await getOpenCareers();

  return careers.jobs.map((job) => ({
    params: {
      slug: job.slug,
    },
  }));
}

export default async function CareerPage({ params: { slug } }: PageProps) {
  const { jobs, mission, description } = await getOpenCareers();
  const career = jobs.find((job) => job.slug === slug);

  if (!career) {
    notFound();
  }

  return (
    <div className="min-h-[50vh]">
      <h1 className="text-4xl font-bold">{career.title}</h1>

      {/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
      {(career.type || career.location) && (
        <div className="mt-5 flex items-center gap-2">
          {career.type && <Pill>{career.type}</Pill>}
          {career.location && <Pill>{career.location}</Pill>}
        </div>
      )}

      {/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
      {(description || mission) && (
        <div className="mt-10 flex flex-col gap-6">
          {description && (
            <div className="text-lg">{await compileMarkdown(description)}</div>
          )}

          {mission && (
            <div>
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              <div className="mt-2 text-lg">
                {await compileMarkdown(mission)}
              </div>
            </div>
          )}
        </div>
      )}

      {career.content && (
        <div className="prose prose-xl prose-invert prose-p:text-primary-100 prose-li:text-primary-100 prose-ul:list-none mt-14 max-w-full">
          {await compileMarkdown(career.content)}
        </div>
      )}

      {career.salary && (
        <>
          <h2 className="mt-16 text-2xl font-bold text-white">Salary</h2>
          <div className="mt-2 text-lg">
            {await compileMarkdown(career.salary)}
          </div>
        </>
      )}

      {career.application && (
        <>
          <h2 className="mt-16 text-2xl font-bold text-white">Application</h2>
          <div className="mt-2 text-lg">
            {await compileMarkdown(career.application)}
          </div>
        </>
      )}
    </div>
  );
}
