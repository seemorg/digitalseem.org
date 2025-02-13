import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import pattern from "@/../public/images/pattern.svg";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function Transformation() {
  return (
    <section className="py-28">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl bg-primary-foreground p-10 pt-0 text-white sm:p-16">
          <div className="h-[200px] sm:hidden" />

          <div className="sm:max-w-[60%] md:max-w-[50%]">
            <h2 className="text-4xl font-bold">Be an Early Supporter</h2>
            <p className="mt-3 text-lg">
              Your support helps us build the foundation of Islamic knowledge in
              an AI-first world. We&apos;re working to ensure that the tradition
              doesn&apos;t get left behind.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Button asChild>
                <a href={siteConfig.contact.mailto}>Get in Touch</a>
              </Button>
              <Button variant="blur" asChild>
                <a href="https://donate.usul.ai" target="_blank">
                  Donate
                </a>
              </Button>
            </div>
          </div>

          <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={pattern}
            alt="Pattern"
            className="pointer-events-none absolute inset-0 left-auto -z-[2] h-[230px] object-cover sm:h-full"
          />

          <div className="absolute left-0 right-0 top-0 -z-[1] h-[230px] bg-gradient-to-b from-transparent to-primary-foreground sm:hidden" />
        </div>
      </Container>
    </section>
  );
}
