import { getOpenCareers } from "@/lib/notion";
import Link from "next/link";
import Pill from "@/components/ui/pill";
import { getMetadata } from "@/lib/config";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/ui/container";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { compileMarkdown } from "@/lib/md";
// import Faqs from "./faqs";

export const revalidate = 1200; // 20 mins

export async function generateMetadata() {
  const { description: careersDescription } = await getOpenCareers();

  return getMetadata({
    title: "Careers",
    description: careersDescription,
  });
}

export default async function CareersPage() {
  const careers = await getOpenCareers();
  const description = careers.description
    ? compileMarkdown(careers.description, false)
    : null;

  return (
    <>
      <Navbar />

      <Container>
        <div className="flex flex-col justify-between gap-10 border-b border-black/10 py-12 md:flex-row md:items-center md:gap-5">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-primary-foreground">
              Careers
            </h1>

            <p className="mt-2 text-secondary">
              Seemore Foundation is a non-profit building the future of Islamic
              Law research.
            </p>
          </div>

          <div className="block h-[1px] w-full flex-shrink-0 flex-grow-0 bg-black/10 md:h-24 md:w-[1px]" />

          <div className="flex flex-wrap items-center justify-between gap-12 md:justify-end [&_h3]:text-4xl [&_h3]:font-bold [&_h3]:text-primary-foreground [&_p]:mt-2 [&_p]:text-secondary">
            <div>
              <h3>2019</h3>
              <p>Year Founded</p>
            </div>

            <div>
              <h3>32M</h3>
              <p>Total Funding</p>
            </div>

            <div>
              <h3>54</h3>
              <p>Team Members</p>
            </div>

            <div>
              <h3>18</h3>
              <p>Countries</p>
            </div>
          </div>
        </div>
      </Container>

      <Container className="min-h-[40vh] max-w-4xl">
        <div className="py-12">
          <div className="flex flex-col gap-4">
            {careers.jobs.map((job) => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                className="flex items-start justify-between rounded-2xl bg-white p-8 transition-colors hover:bg-gray-50"
              >
                <div>
                  <h3 className="text-2xl font-bold">{job.title}</h3>
                  {description && (
                    <div className="mt-2 text-sm text-secondary">
                      {description}
                    </div>
                  )}

                  <div className="mt-6 flex items-center gap-2">
                    <Pill
                      variant="secondary"
                      className="bg-transparent px-5 py-2 text-sm font-normal"
                    >
                      {job.type}
                    </Pill>
                    <Pill
                      variant="secondary"
                      className="bg-transparent px-5 py-2 text-sm font-normal"
                    >
                      {job.location}
                    </Pill>
                  </div>
                </div>

                <p className="hidden items-center gap-2 text-sm text-lime-600 hover:text-lime-700 sm:flex">
                  Details
                  <ChevronRightIcon className="h-4 w-4" />
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* <Faqs /> */}
      </Container>

      <Footer />
    </>
  );
}
