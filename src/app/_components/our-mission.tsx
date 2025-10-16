import Container from "@/components/ui/container";
import Pill from "@/components/ui/pill";
import Image from "next/image";

const mission = [
  {
    title: "Machine Readability",
    description:
      "We build the infrastructure and processes that transform primary sources of classical Islamic works—often only available in scanned, unstructured formats—into machine-readable, searchable, and analyzable digital texts. This foundational work enables computational methods to update access and readability online to a rich and diverse corpus of Islamic scholarship, opening new avenues for rigorous research and reading.",
  },
  {
    title: "AI-Enhanced Research Tools",
    description:
      "Our products leverage advanced AI techniques, including semantic search and retrieval-augmented generation (which allows precise citations for queries, in contrast to most hallucinogenic or general AI platforms), to provide scholars with precise, reliable, and context-aware access to Islamic texts. These tools support complex queries and scholarly exploration, with additional capabilities such as transliteration and translation engines in development.",
  },
  {
    title: "Corpus Development",
    description:
      "In collaboration with scholars, we curate and structure authoritative Islamic sources across law, history, literature, and more. By collecting libraries that are comprehensive, researcher-vetted, and in structured-digital form, we ensure that users have access to high-quality, representative collections that reflect the depth and diversity of Islamic knowledge.",
  },
];

export default function OurMission() {
  return (
    <section className="py-28">
      <Container>
        <div className="relative px-8 pt-10">
          <div className="absolute top-[60%] right-0 bottom-0 left-0 isolate -z-[1] overflow-hidden rounded-b-3xl sm:top-[10%]">
            <Image
              src="/images/mission.png"
              alt="Mission"
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

          <Pill>Our Mission</Pill>

          <div className="mt-6 flex flex-col gap-16 sm:flex-row">
            <div className="flex-1">
              <h2 className="text-primary-foreground text-5xl font-bold">
                A New Chapter in Islamic Research
              </h2>

              <p className="text-secondary mt-6 text-lg">
                We’re developing the infrastructure to make Islamic scholarship
                accessible, searchable, and analyzable at scale.
              </p>
            </div>

            <ul className="flex flex-1 flex-col gap-12">
              {mission.map((item) => (
                <li key={item.title}>
                  <h3 className="text-primary-foreground text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-secondary/70 mt-2 text-lg">
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
