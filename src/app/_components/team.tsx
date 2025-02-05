"use client";

import Container from "@/components/ui/container";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Pill from "@/components/ui/pill";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const team = [
  {
    name: "Abdellatif Abdelfattah",
    title: "CEO",
    description:
      "Abdellatif co-founded Tarteel AI, lead engineering at Quran.com, and worked at Twitter.",
    image: "/images/team/abdellatif.png",
  },
  {
    name: "Mohamed Lamine",
    title: "Head of Design",
    description:
      "Lamine is a designer with a passion for creating user-friendly and intuitive designs.",
    image: "/images/team/lamine.png",
  },
  {
    name: "Ahmed Riad",
    title: "Founding Engineer",
    description:
      "Ahmed co-founded Remail AI, Betterbook, and was an engineer at Quran.com.",
    image: "/images/team/ahmed-riad.png",
  },
  {
    name: "Ryad Ramo",
    title: "Researcher",
    description:
      "Ryad specializes in Maliki fiqh and Andulisian hisory. He co-managed Markaz Imam Malik.",
    image: "/images/team/ryad.png",
  },
  {
    name: "Rahma Fateen",
    title: "Localization Lead",
    description:
      "Rahma lead Arabic localization at Tarteel AI. She was a translator at Human Rights Watch.",
    image: "/images/team/rahma.png",
  },
  {
    name: "Ahmed Khan",
    title: "Researcher",
    description:
      "Ahmed is a student at Zaytuna College. He's the creator of The Creative Minority podcast.",
    image: "/images/team/ahmed-khan.png",
  },
  {
    name: "Ahmet Aktan",
    title: "Digitization Lead",
    description:
      "Ahmed holds a PhD. from Al-Azhar university. He leads the digitization team and efforts.",
    image: "/images/team/ahmed-aktan.png",
  },
  {
    name: "Adnan Zulfiqar",
    title: "Board Member",
    description:
      "Adnan specializes in Islamic and criminal law. He drafted criminal codes for Maldives and Somalia.",
    image: "/images/team/adnan.png",
  },
  {
    name: "Intisar Rabb",
    title: "Board Member",
    description:
      "Intisar is a Law professor at Harvard. She leads SHARIAsource and the Program in Islamic Law.",
    image: "/images/team/intisar.png",
  },
  {
    name: "Zeki Mokhtarzada",
    title: "Board Member",
    description:
      "Zeki is an entrepreneur with deep technical expertise. He co-founded Freewebs and Truebill.",
    image: "/images/team/zeki.png",
  },
];

export default function Team() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-28">
      <Container>
        <Pill>Team</Pill>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-md text-5xl font-bold text-primary-foreground">
            Meet the Experts Behind the Mission
          </h2>

          <p className="max-w-lg text-lg text-secondary md:border-l-2 md:border-primary-background md:pl-6">
            Our team of experts from Harvard, UPenn, and Quran.com is bridging
            tradition and technology to make Islamic knowledge accessible
            worldwide.
          </p>
        </div>

        <Carousel
          className="relative mt-12"
          orientation="horizontal"
          setApi={setApi}
        >
          <CarouselPrevious
            className="-left-5 z-10 hidden bg-white text-primary-foreground hover:bg-white/80 disabled:pointer-events-none disabled:opacity-0 sm:flex"
            variant="default"
          />

          <CarouselNext
            className="-right-5 z-10 hidden bg-white text-primary-foreground hover:bg-white/80 disabled:pointer-events-none disabled:opacity-0 sm:flex"
            variant="default"
          />

          <CarouselContent>
            {team.map((item, idx) => (
              <CarouselItem key={idx} className="flex-shrink-0 basis-auto">
                <div
                  className={cn(
                    "w-[310px] overflow-hidden rounded-3xl bg-white",
                  )}
                >
                  <div className="relative bg-[#F6F6F4] grayscale">
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent" />
                    <Image
                      src={item.image}
                      alt={`Image of ${item.name}`}
                      height={300}
                      width={300}
                    />
                  </div>

                  <div className="p-6">
                    <h5 className="text-xl font-semibold text-primary-foreground">
                      {item.name}
                    </h5>
                    <p className="text-primary-foreground">{item.title}</p>
                    <p className="mt-4 text-secondary">{item.description}</p>
                  </div>
                </div>

                {idx !== team.length - 1 && (
                  <div className="w-3 flex-shrink-0 sm:w-5" />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-12 flex items-center justify-center gap-4 sm:hidden">
            {new Array(count).fill(null).map((_, idx) => (
              <span
                key={idx}
                className={cn(
                  "h-2 w-2 rounded-full",
                  current === idx + 1
                    ? "bg-primary-foreground"
                    : "bg-primary-foreground/25",
                )}
              />
            ))}
          </div>
        </Carousel>
      </Container>
    </section>
  );
}
