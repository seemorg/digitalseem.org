import Container from "@/components/ui/container";
import BentoCard from "./bento-card";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Pill from "@/components/ui/pill";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <Container>
        <Pill>Our Projects</Pill>
        <h2 className="text-primary-foreground mt-6 text-5xl font-bold">
          Islamic Knowledge, Engineered
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          <BentoCard className="relative flex min-h-[400px] flex-col overflow-hidden md:col-span-2">
            <div className="flex h-full flex-col lg:w-1/2 lg:justify-between">
              <div>
                <h3 className="text-primary-foreground text-4xl font-semibold">
                  Usul.ai
                </h3>

                <p className="text-secondary/70 mt-6 text-xl">
                  Usul is an AI-powered platform designed to evolve how Islamic
                  research is conducted in the twenty-first century. It
                  leverages the largest digital libraries and offers support
                  for:
                </p>

                <ul className="text-secondary/70 mt-4 list-inside list-disc text-xl">
                  <li>15,000+ Islamic Books</li>
                  <li>AI-Powered Search for Islamic Sources</li>
                  <li>Curated Islamic Collections (universal corpus to come!)</li>
                </ul>
              </div>

              <div className="mt-6">
                <a
                  className="text-primary-foreground inline-flex items-center gap-2 text-lg underline"
                  target="_blank"
                  href="https://usul.ai"
                >
                  View
                  <ChevronRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="xs:h-[250px] h-[200px] md:h-[280px] lg:hidden" />

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
                <h3 className="text-primary-foreground text-4xl font-semibold">
                  Tansis.ai
                </h3>

                <p className="text-secondary/70 mt-6 text-xl">
                Tansis converts Arabic text to Latin script using various transliteration standards including:
                </p>

                <ul className="text-secondary/70 mt-4 list-inside list-disc text-xl">
                  <li>SHARIAsource</li>
                  <li>IJMES</li>
                  <li>ALA-LC</li>
                  <li>DIN 31635</li>
                  <li>Buckwalter</li>
                </ul>
              </div>

              <div className="mt-6">
                <a
                  className="text-primary-foreground inline-flex items-center gap-2 text-lg underline"
                  target="_blank"
                  href="https://tansis.ai"
                >
                  View
                  <ChevronRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="xs:h-[250px] h-[200px] md:h-[280px] lg:hidden" />

            <Image
              src="/images/tansis-screenshot.png"
              alt="Usul screenshot"
              width={466}
              height={466}
              className={cn(
                "absolute bottom-0 translate-y-[60%] rounded-lg shadow-2xl sm:translate-y-[40%] lg:translate-y-[22%]",
                "right-0 translate-x-[10%] rotate-1 lg:translate-x-[5%]",
              )}
            />
          </BentoCard>

          <BentoCard className="relative flex min-h-[400px] flex-col overflow-hidden md:col-span-2">
            <div className="flex h-full flex-col lg:w-1/2 lg:justify-between">
              <div>
                <h3 className="text-primary-foreground text-4xl font-semibold">
                  Arabic OCR
                </h3>

                <p className="text-secondary/70 mt-6 text-xl">
                  A state-of-the-art Arabic OCR model using recent breakthroughs
                  in Vision LLMs. We&apos;re using and improving the model
                  internally. Stay tuned for the public release.
                </p>
              </div>

              <p className="text-primary-foreground mt-6 text-lg italic">
                Coming Soon
              </p>
            </div>

            <div className="xs:h-[330px] h-[250px] md:h-[280px] lg:hidden" />

            <Image
              src="/images/ocr.png"
              alt="Usul screenshot"
              width={568}
              height={334}
              quality={100}
              className={cn(
                "xs:h-[300px] absolute right-0 bottom-3 h-[220px] w-auto object-contain lg:top-1/2 lg:bottom-1/2 lg:-translate-y-1/2",
              )}
            />
          </BentoCard>

          <BentoCard className="flex min-h-[400px] flex-col justify-between">
            <div>
              <h3 className="text-primary-foreground text-4xl font-semibold">
                Core Corpus
              </h3>

              <p className="text-secondary/70 mt-6 text-xl">
                Working with scholars to identify the most important works in
                each Islamic disclipline. We make sure that these texts are
                digitally accessible and have the correct metadata.
              </p>
            </div>

            <div className="mt-6">
              <a
                className="text-primary-foreground inline-flex items-center gap-2 text-lg underline"
                target="_blank"
                href="https://airtable.com/appQaVgXPdGXuG5Fx/shrdSmSCOeTMmw3aq"
              >
                View
                <ChevronRightIcon className="h-4 w-4" />
              </a>
            </div>
          </BentoCard>

          <BentoCard className="flex min-h-[400px] flex-col justify-between">
            <div>
              <h3 className="text-primary-foreground text-4xl font-semibold">
                AI Translations
              </h3>

              <p className="text-secondary/70 mt-6 text-xl">
                Make Islamic texts accessible to people worldwide. AIs are still
                unable to reliably translate texts while being true to the
                source. We&apos;re tackling this once the technology matures.
              </p>
            </div>

            <p className="text-primary-foreground mt-6 text-lg italic">
              Future Project
            </p>
          </BentoCard>
        </div>
      </Container>
    </section>
  );
}
