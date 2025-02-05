import { Logo } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/layout/navbar";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[80vh] w-full items-center justify-center">
      {/* <Image
        src="/images/hero.jpeg"
        alt="Hero"
        width={1443}
        height={887}
        className="absolute inset-0 -z-[2] h-full w-full object-cover"
      /> */}
      <video
        src="/images/hero-video.mp4"
        autoPlay
        muted
        loop
        className="absolute inset-0 -z-[2] h-full w-full object-cover"
      />

      {/* <div className="absolute inset-0 -z-[1] bg-[#273E3D] opacity-50" /> */}
      <div className="absolute inset-0 -z-[1] bg-[#132A29] opacity-55" />

      <Navbar variant="overlay" />

      <div className="flex max-w-xl flex-col items-center text-white">
        <Logo className="w-32" />
        <h1 className="mt-6 text-center font-scheherazade text-6xl font-bold">
          New Era in Islamic Law Research
        </h1>

        <p className="mt-6 max-w-sm text-center">
          Preserving centuries of wisdom and transforming the way researchers
          access Islamic Law.
        </p>

        <div className="mt-6 flex items-center gap-4 font-bold">
          <Button size="lg">Our Projects</Button>
          <Button variant="blur" className="gap-1" size="lg">
            <PlayIcon className="h-5 w-5" />
            Play
          </Button>
        </div>
      </div>
    </section>
  );
}
