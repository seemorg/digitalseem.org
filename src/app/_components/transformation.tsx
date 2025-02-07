import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function Transformation() {
  return (
    <section className="py-28">
      <Container>
        <div className="bg-primary-foreground relative isolate overflow-hidden rounded-3xl p-10 pt-0 text-white sm:p-16">
          <div className="h-[200px] sm:hidden" />

          <div className="sm:max-w-[60%] md:max-w-[50%]">
            <h2 className="text-4xl font-bold">
              Be an Early Supporter
            </h2>
            <p className="mt-3 text-lg">
              Your support helps us build the foundation of Islamic knowledge in an AI-first world. We&apos;re working to ensure that the tradition doesn&apos;t get left behind.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Button>Get in Touch</Button>
              <Button variant="blur">Donate</Button>
            </div>
          </div>

          <div
            className="absolute left-0 right-0 top-0 -z-[1] h-[230px] [--bg-angle:180deg] sm:bottom-0 sm:left-[50%] sm:h-auto sm:[--bg-angle:270deg]"
            style={{
              background:
                "linear-gradient(var(--bg-angle), rgba(39, 62, 61, 0.00) 40.26%, #273E3D 100%), url(/images/part-of-the-transformation.jpeg) lightgray 50% / cover no-repeat",
            }}
          />
        </div>
      </Container>
    </section>
  );
}
