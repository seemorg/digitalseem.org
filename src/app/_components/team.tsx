import Container from "@/components/ui/container";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Pill from "@/components/ui/pill";
import { cn } from "@/lib/utils";
import Image from "next/image";
import TeamCarousel from "./team-carousel.client";

const team = [
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
  {
    name: "Adnan Zulfiqar",
    title: "Board Member",
    description:
      "Adnan specializes in Islamic and criminal law. He drafted criminal codes for Maldives and Somalia.",
    image: "/images/team/adnan.png",
  },
  {
    name: "Ahmet Aktan",
    title: "Digitization Lead",
    description:
      "Ahmed holds a PhD. from Al-Azhar university. He leads the digitization team and efforts.",
    image: "/images/team/ahmed-aktan.png",
  },
  {
    name: "Anas Hassanien",
    title: "Software Engineer",
    description:
      "Anas leads the development of our core products. He was a software engineer at Simli AI.",
    image: "/images/team/anas.png",
  },
  {
    name: "Abtsam Saleh",
    title: "Director of Operations",
    description:
      "Abtsam is a PhD candidate at Harvard University researching the social dimensions of human-centered technologies.",
    image: "/images/team/abtsam.png",
  },
  {
    name: "Ismail Safadi",
    title: "Researcher",
    description:
      "Ismail specializes in Hanafi fiqh. He studied at the University of Jordan and in Turkey.",
    image: "/images/team/ismail.png",
  },
  {
    name: "Ryad Ramo",
    title: "Researcher",
    description:
      "Ryad specializes in Maliki fiqh and Andulisian hisory. He co-managed Markaz Imam Malik.",
    image: "/images/team/ryad.png",
  },
  {
    name: "Abdellatif Abdelfattah",
    title: "Founding CEO",
    description:
      "Abdellatif co-founded Tarteel AI, lead engineering at Quran.com, and worked at Twitter.",
    image: "/images/team/abdellatif.png",
  },
  {
    name: "Ahmed Riad",
    title: "Founding Engineer",
    description:
      "Ahmed co-founded Remail AI, Betterbook, and was an engineer at Quran.com.",
    image: "/images/team/ahmed-riad.png",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28">
      <Container>
        <Pill>Team</Pill>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="text-primary-foreground max-w-md text-5xl font-bold">
            Meet the Team Behind our Mission
          </h2>

          <p className="text-secondary max-w-lg text-lg">
            {/* Our team comes from Harvard, UPenn, Twitter, and Quran.com. We&apos;re working at the intersection of technology and Islamic research. Join our team. */}
            The Seemore Foundation is a research-forward nonprofit organization
            that develops technologies to advance access to and generate
            insights in Islamic knowledge. Its team brings together experts in
            AI, engineering, and Islamic studies, working at the intersection of
            tradition and machine learning to create scalable tools that advance
            the future of scholarship.
          </p>
        </div>

        <TeamCarousel>
          <CarouselPrevious
            className="text-primary-foreground -left-5 z-10 hidden bg-white hover:bg-white/80 disabled:pointer-events-none disabled:opacity-0 sm:flex"
            variant="default"
          />

          <CarouselNext
            className="text-primary-foreground -right-5 z-10 hidden bg-white hover:bg-white/80 disabled:pointer-events-none disabled:opacity-0 sm:flex"
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
                    <h5 className="text-primary-foreground text-xl font-semibold">
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
        </TeamCarousel>
      </Container>
    </section>
  );
}
