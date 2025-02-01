import Container from "@/components/ui/container";
import { Logo } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PlayIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[80vh] w-full items-center justify-center">
      <Image
        src="/images/hero.jpeg"
        alt="Hero"
        width={1443}
        height={887}
        className="absolute inset-0 -z-[2] h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-[1] bg-[#273E3D] opacity-50" />

      <nav
        className="absolute left-0 right-0 top-0 text-white"
        style={{
          background: `linear-gradient(180deg, rgba(43, 55, 61, 0.00) 0%, rgba(115, 147, 163, 0.00) 100%)`,
          backdropFilter: `blur(17px)`,
        }}
      >
        <Container className="flex items-center justify-between border-b border-white/10 py-4">
          <div className="flex flex-1 items-center gap-2">
            <Logo className="w-8" />
            <span>
              <strong>Seemore</strong> Foundation
            </span>
          </div>

          <ul className="hidden flex-1 items-center justify-center gap-8 sm:flex">
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
  );
}
