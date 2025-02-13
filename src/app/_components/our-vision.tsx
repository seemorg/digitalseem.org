import Container from "@/components/ui/container";
import Pill from "@/components/ui/pill";
import Image from "next/image";

const vision = [
  {
    title: "Digitization",
    description:
      "The majority of Islamic texts are in non-machine readable formats like scanned PDFs. AIs cannot process or search these texts. We're building the infrastructure to digitize them at scale.",
  },
  {
    title: "Agents",
    description:
      "Researching Islamic texts is time-consuming and relies on primitive tooling. We're adopting state-of-the-art AI tools to make research faster, easier, and more insightful.",
  },
];

export default function OurVision() {
  return (
    <section id="about" className="py-28">
      <Container>
        <div className="relative px-8 pt-10">
          <div className="absolute bottom-0 left-0 right-0 top-[60%] isolate -z-[1] overflow-hidden rounded-b-3xl sm:top-[10%]">
            <Image
              src="/images/vision.png"
              alt="Vision"
              fill
              className="-z-[2] object-cover"
            />

            <div
              className="-z-[1] h-full w-full"
              style={{
                background: `linear-gradient(360deg, rgba(246, 246, 244, 0) 0%, #F6F6F4 72.29%)`,
              }}
            />
          </div>

          <Pill>Our Vision</Pill>

          <div className="mt-6 flex flex-col gap-16 sm:flex-row">
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-primary-foreground">
                Unlocking the Past, Shaping the Future
              </h2>

              <p className="mt-6 text-lg text-secondary">
                Digitizing centuries of knowledge and building for an AI-first
                future
              </p>
            </div>

            <ul className="flex flex-1 flex-col gap-12">
              {vision.map((item) => (
                <li key={item.title}>
                  <h3 className="text-xl font-semibold text-primary-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-lg text-secondary/70">
                    {item.description}
                  </p>
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
