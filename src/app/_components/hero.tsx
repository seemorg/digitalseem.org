import { Button } from "@/components/ui/button";
import { PlayIcon } from "@heroicons/react/24/outline";
import { PlayIcon as PlayIconSolid } from "@heroicons/react/24/solid";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";
import {
  VideoIframe,
  VideoModal,
  VideoModalContent,
  VideoModalDescription,
  VideoModalTitle,
  VideoModalTrigger,
  VideoModalVideo,
  VideoPlayButton,
  VideoPlayer,
  VideoPreview,
} from "@/components/ui/video-modal";
import { siteConfig } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen w-full justify-center">
      <Image
        src="/images/hero.png"
        alt="Hero"
        fill
        className="absolute inset-0 -z-[2] w-full object-cover"
      />

      <div
        className="absolute inset-0 -z-[1] bg-blend-color"
        style={{
          background: `linear-gradient(
            180deg, 
            rgba(31, 49, 48, 0) 0%, 
            rgba(31, 49, 48, 0.5) 60%, 
            rgba(31, 49, 48, 1) 100%
          )`,
        }}
      />

      <Navbar variant="overlay" />

      <div className="mt-64 flex flex-col items-center justify-between px-6 text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <h1 className="text-center font-scheherazade text-6xl font-medium sm:text-8xl">
            The Future of Islamic Knowledge
          </h1>

          <p className="mt-6 max-w-[420px] text-center">
            We&apos;re an applied research lab pioneering Islamic knowledge
            access through cutting-edge AI
          </p>

          <div className="mt-6 flex items-center gap-4 font-bold">
            <Button className="h-11 px-6 py-3 font-bold" asChild>
              <a href="#projects">Our Projects</a>
            </Button>

            <VideoModal>
              <VideoModalTrigger asChild>
                <Button
                  variant="blur"
                  className="h-11 gap-1 px-6 py-3 font-bold"
                >
                  <PlayIcon className="h-5 w-5" />
                  Video
                </Button>
              </VideoModalTrigger>
              <VideoModalContent>
                <VideoModalTitle>Seemore Foundation Overview</VideoModalTitle>
                <VideoModalDescription>
                  A word from our CEO
                </VideoModalDescription>
                <VideoModalVideo>
                  <VideoPlayer>
                    <VideoPreview>
                      <img
                        src="https://assets.digitalseem.org/seemore%20landing%20image.png"
                        alt="Video preview"
                      />
                    </VideoPreview>

                    <VideoPlayButton>
                      <button className="absolute inset-0 m-auto flex size-28 items-center justify-center rounded-full border border-gray-100/50 bg-white/20 text-white backdrop-blur transition duration-300 hover:bg-white/30">
                        <PlayIconSolid className="ml-1 size-16" />
                      </button>
                    </VideoPlayButton>

                    <VideoIframe src="https://assets.digitalseem.org/Seemore%20Landing%20Website.mp4" />
                  </VideoPlayer>
                </VideoModalVideo>
              </VideoModalContent>
            </VideoModal>
          </div>
        </div>

        <div className="mx-auto mt-56 flex max-w-4xl flex-col gap-6 pb-16 sm:pb-28">
          <h3 className="text-2xl font-bold">Building for The AI Age</h3>
          <p>
            We’re transitioning into an AI-first world. Islamic Knowledge is not
            ready for the transition. AIs cannot process the majority of the
            Islamic texts today because they’re in non-machine readable formats
            such as scanned PDFs, or in some cases, only available in physical
            copies. Texts often lack the required metadata or proper cataloging
            needed for AIs to to retrieve and access them. To have a future
            where Islamic knowledge is at the forefront of the AI revolution, we
            need resources a full-time team tackling this problem. This is what
            we’re set out to do.
          </p>

          <p className="text-white/70">
            If shaping the future of Islamic knowledge excites you,{" "}
            <a
              href={siteConfig.contact.mailto}
              className="text-lime-400 underline"
            >
              let&apos;s get in touch
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
