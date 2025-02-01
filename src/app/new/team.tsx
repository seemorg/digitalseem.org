import Container from "@/components/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Pill from "@/components/ui/pill";
import { cn } from "@/lib/utils";

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

export default function Team() {
  return (
    <section className="py-28">
      <Container>
        <Pill>Team</Pill>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
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
              <CarouselItem key={idx} className="flex-shrink-0 basis-auto">
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
  );
}
