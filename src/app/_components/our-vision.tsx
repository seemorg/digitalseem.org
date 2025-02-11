import Container from "@/components/ui/container";
import Pill from "@/components/ui/pill";
import { cn } from "@/lib/utils";
import Image from "next/image";

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

export default function OurVision() {
  return (
    <section id="about" className="py-28">
      <Container>
        <div className="relative px-8 pt-10">
          <div className="absolute bottom-0 left-0 right-0 top-[60%] isolate -z-[1] overflow-hidden rounded-b-3xl sm:top-[40%]">
            <Image
              src="/images/vision.png"
              alt="Vision"
              fill
              className="-z-[2] object-cover"
            />

            {/* linear gradient */}
            <div className="-z-[1] h-full w-full bg-gradient-to-b from-[#F6F6F4] to-transparent" />
          </div>

          <Pill>Our Vision</Pill>

          <div className="mt-6 flex flex-col gap-16 sm:flex-row">
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-primary-foreground">
                Unlocking the Past, Shaping the Future
              </h2>
              <p className="mt-6 text-lg text-secondary">
                Our vision is built on three transformative pillars
              </p>
            </div>

            <ul className="flex-1">
              {vision.map((item, idx) => (
                <li
                  key={item.title}
                  className={cn(
                    "pb-4",
                    idx !== vision.length - 1 && "border-b border-secondary/10",
                    idx !== 0 && "pt-4",
                  )}
                >
                  <h3 className="text-xl font-semibold text-primary-foreground">
                    {item.title}
                  </h3>

                  <p className="text-lg text-secondary">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-24 w-full sm:h-64" />
        </div>
      </Container>
    </section>
  );
}
