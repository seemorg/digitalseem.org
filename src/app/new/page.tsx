import Container from "@/components/Container";
import { Logo } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import BentoCard from "./bento-card";
import { ChevronRightIcon, PlayIcon } from "@heroicons/react/24/outline";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const vision = [
  {
    title: "Preserve",
    description:
      "Digitizing centuries-old Islamic texts to safeguard invaluable knowledge for generations to come.",
  },
  {
    title: "Empower",
    description:
      "Equipping researchers with cutting-edge tools to make their work faster, easier, and more insightful.",
  },
  {
    title: "Connect",
    description:
      "Bridging the gap between tradition and innovation by making this rich heritage accessible to a global audience.",
  },
];

const team = [
  {
    name: "John Doe",
    title: "Founder",
    description: "Lorem ipsum dolor sit amet consectetur. Ac ut.",
  },
  {
    name: "John Doe",
    title: "Founder",
    description: "Lorem ipsum dolor sit amet consectetur. Ac ut.",
  },
  {
    name: "John Doe",
    title: "Founder",
    description: "Lorem ipsum dolor sit amet consectetur. Ac ut.",
  },
  {
    name: "John Doe",
    title: "Founder",
    description: "Lorem ipsum dolor sit amet consectetur. Ac ut.",
  },
  {
    name: "John Doe",
    title: "Founder",
    description: "Lorem ipsum dolor sit amet consectetur. Ac ut.",
  },
];

const Pill = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="bg-primary-background text-primary-foreground w-fit rounded-full px-3 py-1.5 font-bold">
      {children}
    </p>
  );
};

export default function NewPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[80vh] w-full items-center justify-center">
        <Image
          src="/images/hero.jpeg"
          alt="Hero"
          width={1443}
          height={887}
          className="absolute inset-0 -z-[2] h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-[1] bg-[#273E3D] opacity-50" />

        <nav className="absolute left-0 right-0 top-0 text-white">
          <Container className="flex items-center justify-between border-b border-white/10 py-6">
            <div className="flex flex-1 items-center gap-2">
              <Logo className="w-8" />
              <span>
                <strong>Seemore</strong> Foundation
              </span>
            </div>

            <ul className="flex flex-1 items-center justify-center gap-8">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Projects</Link>
              </li>
            </ul>

            <div className="flex flex-1 items-center justify-end gap-4 font-bold">
              <Button variant="blur">Donate</Button>
              <Button>Projects</Button>
            </div>
          </Container>
        </nav>

        <div className="flex max-w-xl flex-col items-center text-white">
          <Logo className="w-32" />
          <h1 className="font-scheherazade mt-6 text-center text-6xl font-bold">
            New Era in Islamic Law Research
          </h1>

          <p className="mt-6 max-w-sm text-center">
            Preserving centuries of wisdom and transforming the way researchers
            access Islamic Law.
          </p>

          <div className="mt-6 flex items-center gap-4 font-bold">
            <Button>Our Projects</Button>
            <Button variant="blur" className="gap-1">
              <PlayIcon className="h-4 w-4" />
              Play
            </Button>
          </div>
        </div>
      </section>

      <section className="py-28">
        <Container className="relative px-8 pt-10">
          <div className="absolute bottom-0 left-0 right-0 top-32 isolate -z-[1] h-[572px] overflow-hidden rounded-b-3xl">
            <Image
              src="/images/vision.png"
              alt="Vision"
              fill
              className="-z-[2] object-cover"
            />

            {/* linear gradient */}
            <div className="-z-[1] h-full w-full bg-[linear-gradient(360deg,rgba(246,246,244,0)_0%,#F6F6F4_72.29%)]" />
          </div>

          <Pill>Our Vision</Pill>

          <div className="mt-6 flex gap-10">
            <div className="flex-1">
              <h2 className="text-primary-foreground text-5xl font-bold">
                Unlocking the Past, Shaping the Future
              </h2>
              <p className="text-secondary mt-6 text-lg">
                Our vision is built on three transformative pillars
              </p>
            </div>

            <ul className="flex-1 ">
              {vision.map((item, idx) => (
                <li
                  key={item.title}
                  className={cn(
                    "pb-4",
                    idx !== vision.length - 1 && "border-secondary/10 border-b",
                    idx !== 0 && "pt-4",
                  )}
                >
                  <h3 className="text-primary-foreground text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-secondary text-lg">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-[266px] w-full" />
        </Container>
      </section>

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
                    A transformative platform digitizing classical Islamic
                    texts, enabling researchers to navigate vast collections
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
              <h3 className="text-primary-foreground text-3xl font-bold">
                OCR
              </h3>

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

      <section className="py-28">
        <Container>
          <Pill>Team</Pill>
          <div className="mt-6 flex items-center justify-between">
            <h2 className="text-primary-foreground max-w-md text-5xl font-bold">
              Meet the Experts Behind the Mission
            </h2>
            <p className="text-secondary max-w-lg text-lg">
              Our team of experts from Harvard, UPenn, and Quran.com is bridging
              tradition and technology to make Islamic knowledge accessible
              worldwide.
            </p>
          </div>

          <Carousel className="relative mt-12" orientation="horizontal">
            <CarouselPrevious
              className="text-primary-foreground -left-5 z-10 bg-white hover:bg-white/80 disabled:pointer-events-none disabled:opacity-0"
              variant="default"
            />
            <CarouselNext
              className="text-primary-foreground -right-5 z-10 bg-white hover:bg-white/80 disabled:pointer-events-none disabled:opacity-0"
              variant="default"
            />

            <CarouselContent>
              {team.map((item, idx) => (
                <CarouselItem
                  key={item.name}
                  className="flex-shrink-0 basis-auto"
                >
                  <div
                    className={cn(
                      "w-[300px] overflow-hidden rounded-3xl bg-white",
                    )}
                  >
                    <div className="bg-primary-foreground h-[300px] w-full" />

                    <div className="p-6">
                      <h5 className="text-primary-foreground text-2xl font-semibold">
                        {item.name}
                      </h5>
                      <p className="text-primary-foreground">{item.title}</p>
                      <p className="text-secondary mt-4">{item.description}</p>
                    </div>
                  </div>

                  {idx !== team.length - 1 && (
                    <div className="w-3 flex-shrink-0 sm:w-5" />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Container>
      </section>

      <section className="py-28">
        <Container className="bg-primary-foreground relative isolate overflow-hidden rounded-3xl p-16 text-white">
          <div className="max-w-[50%]">
            <h2 className="text-4xl font-bold">
              Be Part of the Transformation
            </h2>
            <p className="mt-3 text-lg">
              Your support helps us preserve Islamic heritage and create tools
              that empower researchers globally. Together, we can open new doors
              for discovery.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Button>Donate</Button>
              <Button variant="blur">Learn More</Button>
            </div>
          </div>

          <div
            className="absolute bottom-0 left-[50%] right-0 top-0 z-[0]"
            style={{
              background:
                "linear-gradient(270deg, rgba(39, 62, 61, 0.00) 40.26%, #273E3D 100%), url(/images/part-of-the-transformation.jpeg) lightgray 50% / cover no-repeat",
            }}
          />
        </Container>
      </section>

      <footer className="py-12">
        <Container className="flex items-center justify-between pb-5">
          <Logo className="w-9" />
        </Container>

        <Container className="border-secondary/20 flex items-center justify-between border-t pt-5">
          <div className="flex gap-4">
            <p className="text-secondary text-lg">
              &copy; {new Date().getFullYear()} Digitalseem. All rights
              reserved.
            </p>

            <ul className="flex items-center gap-4">
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
}
