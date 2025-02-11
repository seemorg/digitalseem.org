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
        <h2 className="mt-6 text-5xl font-bold text-primary-foreground">
          Explore Our Groundbreaking Projects
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          <BentoCard className="relative flex min-h-[400px] flex-col overflow-hidden md:col-span-2">
            <div className="flex h-full flex-col lg:w-1/2 lg:justify-between">
              <div>
                <h3 className="mt-8 text-3xl font-bold text-primary-foreground">
                  Usul.ai
                </h3>

                <p className="mt-6 text-lg text-secondary">
                  A transformative platform digitizing classical Islamic texts,
                  enabling researchers to navigate vast collections
                  effortlessly.
                </p>
              </div>

              <a
                className="flex w-fit items-center gap-2 text-sm text-primary-foreground underline"
                target="_blank"
                href="https://usul.ai"
              >
                Learn More
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

          <BentoCard>
            <h3 className="text-3xl font-bold text-primary-foreground">OCR</h3>

            <p className="mt-6 text-lg text-secondary">
              Advanced optical character recognition to convert handwritten
              manuscripts into searchable digital formats.
            </p>

            <a
              className="mt-12 flex w-fit items-center gap-2 text-sm text-primary-foreground underline"
              target="_blank"
              href="https://usul.ai"
            >
              Learn More
              <ChevronRightIcon className="h-4 w-4" />
            </a>
          </BentoCard>

          <BentoCard>
            <h3 className="text-3xl font-bold text-primary-foreground">
              AI Translations
            </h3>

            <p className="mt-6 text-lg text-secondary">
              Breaking language barriers with AI-powered translations, opening
              Islamic resources to a global audience.
            </p>

            <a
              className="mt-12 flex w-fit items-center gap-2 text-sm text-primary-foreground underline"
              target="_blank"
              href="https://usul.ai"
            >
              Learn More
              <ChevronRightIcon className="h-4 w-4" />
            </a>
          </BentoCard>
        </div>
      </Container>
    </section>
  );
}
