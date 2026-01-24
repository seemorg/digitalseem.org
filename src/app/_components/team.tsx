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
      "She is a Professor of law and history at Harvard, specializing in criminal law and interpretation (usul al-fiqh). She leads the Program in Islamic Law and the SHARIAsource Lab , and IslamicLawBlog.",
    image: "/images/team/intisar.png",
  },
  {
    name: "Zeki Mokhtarzada",
    title: "Board Member",
    description:
      "He is a serial entrepeneur and technology innovator. He has served as CTO to various start-ups and has co-founded multiple ventures, including webs.com (acquired by Vistaprint) and Truebill (now Rocket Money).",
    image: "/images/team/zeki.png",
  },
  {
    name: "Adnan Zulfiqar",
    title: "Board Member",
    description:
      "He is a Professor of law at Boston College Law School, where he teaches and writes on criminal law and the laws of war. He helped draft the Islamic criminal codes for the Maldives and Somalia.",
    image: "/images/team/adnan.png",
  },
  {
    name: "Ahmet Aktan",
    title: "Digitization Lead",
    description:
      "He is a researcher who holds a PhD in Islamic Studies from Al-Azhar University. He leads the digitization team and efforts to expand the collections at Usul AI.",
    image: "/images/team/ahmed-aktan.png",
  },
  {
    name: "Anas Hassanien",
    title: "Software Engineer",
    description:
      "He is a software engineer with full-stack experience, who previously served at Simli AI. He leads the development of core products as Usul.AI.",
    image: "/images/team/anas.png",
  },
  {
    name: "Abtsam Saleh",
    title: "Director of Operations",
    description:
      "She is a PhD candidate at Harvard University researching the social dimensions of humancentered technologies, and serves as an administrator and researcher at Usul.AI, where she directs operations and bridges engineering and research.",
    image: "/images/team/abtsam.png",
  },
  {
    name: "Ismail Safadi",
    title: "Researcher",
    description:
      "He is a researcher who specializes in Hanafi fiqh. He studied at the University of Jordan and in Turkey. He works on book digitization and annotation at Usul AI.",
    image: "/images/team/ismail.png",
  },
  {
    name: "Ryad Ramo",
    title: "Researcher",
    description:
      "He is a researcher of Islamic knowledge and history, holds a BA in Islamic Studies, and founded the publication the Gems of Al-Andalus. He works on book-digitization and annotation at Usul AI.",
    image: "/images/team/ryad.png",
  },
  {
    name: "Abdellatif Abdelfattah",
    title: "Former CEO",
    description:
      "He is an engineer who served as a co-founding engineer at Tarteel AI and our own Usul AI. He previously lead engineering at Quran.com and worked at Twitter.",
    image: "/images/team/abdellatif.png",
  },
  {
    name: "Ahmed Riad",
    title: "Former Lead Engineer",
    description:
      "He is a software engineer who served as founding-engineer at at several start-ups (including Remail AI, Betterbook, and our own Usul AI). he also served as an engineer at Qur'an.com",
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
