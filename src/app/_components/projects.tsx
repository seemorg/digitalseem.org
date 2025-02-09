import Container from "@/components/ui/container";
import BentoCard from "./bento-card";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Pill from "@/components/ui/pill";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section className="py-28">
      <Container>
        <Pill>Our Projects</Pill>
        <h2 className="mt-6 text-5xl font-bold text-primary-foreground">
          Shipping at Startup Speed
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          <BentoCard className="relative flex min-h-[400px] flex-col overflow-hidden md:col-span-2">
            <div className="flex h-full flex-col lg:w-1/2 lg:justify-between">
              <div>
                <h3 className="mt-8 text-3xl font-bold text-primary-foreground">
                  Usul AI
                </h3>

                <p className="mt-6 text-lg text-secondary">
                  Usul is an AI-native platform for researching Islamic texts. It builds on top of the largest digital libraries and supports: 
                </p>
                {/* bullets */}
                <ul className="mt-6 text-lg text-secondary">
                  <li>- 10,000+ Islamic Books</li>
                  <li>- AI-powered answers using RAG</li>
                  <li>- Semantic and Keyword Search</li>
                  <li>- Research Agent (soon)</li>
                </ul>
              </div>

              <a
                className="flex w-fit items-center gap-2 text-sm text-primary-foreground underline mt-12"
                target="_blank"
                href="https://usul.ai"
              >
                View
                <ChevronRightIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="h-[200px] xs:h-[250px] md:h-[280px] lg:hidden" />

            <Image
              src="/images/usul-screenshot.png"
              alt="Usul screenshot"
              width={746}
              height={466}
              className={cn(
                "absolute bottom-0 translate-y-[30%] rounded-lg shadow-2xl sm:translate-y-[40%] lg:translate-y-[20%]",
                "right-0 translate-x-[15%] rotate-1 lg:translate-x-[35%]",
              )}
            />
          </BentoCard>
          <BentoCard className="relative flex min-h-[400px] flex-col overflow-hidden md:col-span-2">
            <div className="flex h-full flex-col lg:w-1/2 lg:justify-between">
              <div>
                <h3 className="mt-8 text-3xl font-bold text-primary-foreground">
                  OCR
                </h3>

                <p className="mt-6 text-lg text-secondary">
                  A state-of-the-art Arabic OCR model using recent breakthroughs in Vision LLMs. We&apos;re using and improving the model internally. Stay tuned for the public release.
                </p>
              </div>

              <a
                className="flex w-fit items-center gap-2 text-sm text-primary-foreground italic mt-12"
                // target="_blank"
                // href="https://usul.ai"
              >
                Coming Soon
                {/* <ChevronRightIcon className="h-4 w-4" /> */}
              </a>
            </div>

            <div className="h-[200px] xs:h-[250px] md:h-[280px] lg:hidden" />

            <Image
              src="/images/usul-screenshot.png"
              alt="Usul screenshot"
              width={746}
              height={466}
              className={cn(
                "absolute bottom-0 translate-y-[30%] rounded-lg shadow-2xl sm:translate-y-[40%] lg:translate-y-[20%]",
                "right-0 translate-x-[15%] rotate-1 lg:translate-x-[35%]",
              )}
            />
          </BentoCard>

          <BentoCard>
            <h3 className="text-3xl font-bold text-primary-foreground">
              Core Corpus
            </h3>

            <p className="mt-6 text-lg text-secondary">
              Working with scholars to identify the most important works in each Islamic disclipline. We make sure that these texts are digitally accessible and have the correct metadata.
            </p>

            <a
              className="mt-12 flex w-fit items-center gap-2 text-sm text-primary-foreground underline"
              target="_blank"
              href="https://airtable.com/appQaVgXPdGXuG5Fx/shrdSmSCOeTMmw3aq"
            >
              View
              <ChevronRightIcon className="h-4 w-4" />
            </a>
          </BentoCard>
          <BentoCard>
            <h3 className="text-3xl font-bold text-primary-foreground">
              AI Translations
            </h3>

            <p className="mt-6 text-lg text-secondary">
              Make Islamic texts accessible to people worldwide. AIs are still unable to reliably translate texts while being true to the source. We&apos;re tackling this once the technology matures.
            </p>

            <a
              className="flex w-fit items-center gap-2 text-sm text-primary-foreground italic mt-12"
            // target="_blank"
            // href="https://usul.ai"
            >
              Future Project
              {/* <ChevronRightIcon className="h-4 w-4" /> */}
            </a>
          </BentoCard>
        </div>
      </Container>
    </section>
  );
}
