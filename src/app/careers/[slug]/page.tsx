import Pill from "@/components/ui/pill";
import { getMetadata } from "@/lib/config";
import { CAREERS_PAGE_REVALIDATE } from "@/lib/constants";
import { compileMarkdown } from "@/lib/md";
import { getOpenCareers } from "@/lib/notion";
import { notFound } from "next/navigation";

export const revalidate = CAREERS_PAGE_REVALIDATE;
export const dynamicParams = true; // Allow params that are not statically known at build time

interface Params {
  slug: string;
}

interface PageProps {
  params: Promise<Params>;
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const { jobs, description } = await getOpenCareers();
  const career = jobs.find((job) => job.slug === params.slug);

  if (!career) return {};

  return getMetadata({ title: career.title, description });
}

export async function generateStaticParams(): Promise<{ params: Params }[]> {
  const careers = await getOpenCareers();

  return careers.jobs.map((job) => ({
    params: {
      slug: job.slug,
    },
  }));
}

export default async function CareerPage(props: PageProps) {
  const params = await props.params;
  const { slug } = params;

  const {
    jobs,
    description: descriptionMd,
    mission: missionMd,
  } = await getOpenCareers();
  const career = jobs.find((job) => job.slug === slug);

  if (!career) {
    notFound();
  }

  const {
    title: titleMd,
    content: contentMd,
    salary: salaryMd,
    application: applicationMd,
  } = career;

  const [title, description, mission, content, salary, application] =
    await Promise.all([
      titleMd ? compileMarkdown(titleMd) : null,
      descriptionMd ? compileMarkdown(descriptionMd) : null,
      missionMd ? compileMarkdown(missionMd) : null,
      contentMd ? compileMarkdown(contentMd) : null,
      salaryMd ? compileMarkdown(salaryMd) : null,
      applicationMd ? compileMarkdown(applicationMd) : null,
    ]);

  return (
    <div className="min-h-[50vh]">
      <h1 className="text-4xl font-bold">{title}</h1>

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
          {description && <div className="text-lg">{description}</div>}

          {mission && (
            <div>
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              <div className="mt-2 text-lg">{mission}</div>
            </div>
          )}
        </div>
      )}

      {content && (
        <div className="prose-p:text-primary-100 prose-li:text-primary-100 prose prose-lg prose-invert mt-14 max-w-full prose-headings:mb-2 prose-p:mb-2 prose-ul:mt-0 prose-ul:list-none">
          {content}
        </div>
      )}

      {salary && (
        <>
          <h2 className="mt-16 text-2xl font-bold text-white">Salary</h2>
          <div className="mt-2 text-lg">{salary}</div>
        </>
      )}

      {application && (
        <>
          <h2 className="mt-16 text-2xl font-bold text-white">Application</h2>
          <div className="mt-2 text-lg">{application}</div>
        </>
      )}
    </div>
  );
}
