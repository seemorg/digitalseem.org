import { Logo } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[80vh] w-full items-center justify-center">
      <Image
        src="/images/hero.png"
        alt="Hero"
        width={1443}
        height={1147}
        className="absolute inset-0 -z-[2] h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-[1] bg-[#273E3D] opacity-60" />

      <Navbar variant="overlay" />

      <div className="flex max-w-xl flex-col items-center text-white">
        <Logo className="w-16" />
        <h1 className="mt-6 text-center font-scheherazade text-6xl font-bold">
          The Future of Islamic Knowledge
        </h1>
        <p className="mt-6 max-w-[460px] text-center">
          We&apos;re an applied research lab pioneering Islamic knowledge access
          through cutting-edge AI
        </p>

        <div className="mt-6 flex items-center gap-4 font-bold">
          <Button className="h-11 px-6 py-3 font-bold">Our Projects</Button>
          <Button variant="blur" className="h-11 gap-1 px-6 py-3 font-bold">
            <PlayIcon className="h-5 w-5" />
            Video
          </Button>
        </div>
      </div>
    </section>
  );
}
