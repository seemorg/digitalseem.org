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
        <h2 className="mt-6 text-5xl font-bold">
          Explore Our Groundbreaking Projects
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          <BentoCard className="relative flex min-h-[400px] flex-col overflow-hidden md:col-span-2">
            <div className="flex h-full flex-col lg:w-1/2 lg:justify-between">
              <div>
                <h3 className="text-primary-foreground mt-8 text-3xl font-bold">
                  Usul.ai
                </h3>

                <p className="text-secondary mt-6 text-lg">
                  A transformative platform digitizing classical Islamic texts,
                  enabling researchers to navigate vast collections
                  effortlessly.
                </p>
              </div>

              <a
                className="text-primary-foreground flex w-fit items-center gap-2 text-sm underline"
                target="_blank"
                href="https://usul.ai"
              >
                Learn More
                <ChevronRightIcon className="h-4 w-4" />
              </a>
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

          <BentoCard>
            <h3 className="text-primary-foreground text-3xl font-bold">OCR</h3>

            <p className="text-secondary mt-6 text-lg">
              Advanced optical character recognition to convert handwritten
              manuscripts into searchable digital formats.
            </p>

            <a
              className="text-primary-foreground mt-12 flex w-fit items-center gap-2 text-sm underline"
              target="_blank"
              href="https://usul.ai"
            >
              Learn More
              <ChevronRightIcon className="h-4 w-4" />
            </a>
          </BentoCard>

          <BentoCard>
            <h3 className="text-primary-foreground text-3xl font-bold">
              AI Translations
            </h3>

            <p className="text-secondary mt-6 text-lg">
              Breaking language barriers with AI-powered translations, opening
              Islamic resources to a global audience.
            </p>

            <a
              className="text-primary-foreground mt-12 flex w-fit items-center gap-2 text-sm underline"
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
