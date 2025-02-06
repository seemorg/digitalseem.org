import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Container from "@/components/ui/container";
import Pill from "@/components/ui/pill";
import { getMetadata } from "@/lib/config";
import { compileMarkdown } from "@/lib/md";
import { getOpenCareers } from "@/lib/notion";
import { notFound } from "next/navigation";

export const revalidate = 1200; // 20 mins
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
      titleMd ? compileMarkdown(titleMd, false) : null,
      descriptionMd ? compileMarkdown(descriptionMd, false) : null,
      missionMd ? compileMarkdown(missionMd, false) : null,
      contentMd ? compileMarkdown(contentMd) : null,
      salaryMd ? compileMarkdown(salaryMd) : null,
      applicationMd ? compileMarkdown(applicationMd) : null,
    ]);

  return (
    <>
      <Navbar />

      <Container className="max-w-4xl py-12">
        <h1 className="text-5xl font-bold text-primary-foreground">{title}</h1>
        {description && <p className="mt-2 text-secondary">{description}</p>}

        {/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
        {(career.type || career.location) && (
          <div className="mt-4 flex items-center gap-4">
            {career.type && (
              <Pill variant="secondary" className="px-5 py-2 font-normal">
                {career.type}
              </Pill>
            )}
            {career.location && (
              <Pill variant="secondary" className="px-5 py-2 font-normal">
                {career.location}
              </Pill>
            )}
          </div>
        )}

        {mission && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-primary-foreground">
              Our Mission
            </h3>

            <p className="mt-2 text-secondary">{mission}</p>
          </div>
        )}

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-primary-foreground">
            Job Description
          </h3>

          <div className="mt-6 rounded-2xl bg-white p-8">
            <div className="prose prose-lg max-w-full prose-headings:mb-2 prose-headings:text-primary-foreground prose-p:mb-2 prose-p:text-secondary prose-ul:mt-0 prose-ul:list-none prose-ul:pl-4 prose-li:text-secondary">
              {content}

              {salary && (
                <div>
                  <h2>Salary</h2>
                  {salary}
                </div>
              )}

              {application && (
                <div>
                  <h2>Application</h2>

                  {application}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
