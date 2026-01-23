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
        src="/images/hero.jpg"
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

      <div className="mt-64 flex flex-col items-center justify-between px-6 text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <h1 className="font-scheherazade text-center text-6xl font-medium sm:text-8xl">
            The Future of Islamic Knowledge
          </h1>

          <p className="mt-6 max-w-[420px] text-center">
            We are an organization dedicated to evolving Islamic research for
            the 21st-century by combining scholarly rigor with AI and other
            cutting-edge technologies
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

        <div id="about"></div>

        <div
          id="about"
          className="mx-auto mt-56 flex max-w-4xl flex-col gap-6 pb-16 sm:pb-28"
        >
          <h3 className="text-2xl font-bold">
            Bridging Tradition and Technology
          </h3>
          <p>
            As artificial intelligence and online tools transform how the world
            accesses, analyzes, and preserves knowledge of all types, Islamic
            knowledge has not kept up. The best platforms are built for the
            English language, and they train on the existing expanse of the
            internet–which largely excludes primary sources from the Islamic
            world, most of which have yet to be digitized. Core texts—spanning
            law, history, literature and more—often exist only in books on
            library shelves or scanned pdfs that machines cannot read and, even
            when they can, provide unstructured formats that the latest digital
            tools cannot readily use. Our mission is to address this
            foundational problem by developing the technical infrastructure that
            enables Islamic texts to be machine-readable, searchable, and
            analyzable at scale. Our work bridges the gap between longstanding
            scholarly traditions and modern research technologies. We
            collaborate with scholars, technologists, and institutions who share
            a commitment to preserving the depth of the Islamic tradition while
            making it accessible and analyzable for future generations.
          </p>

          <p className="text-white/70">
            If shaping the future of Islamic knowledge excites you,{" "}
            <a
              href={siteConfig.contact.mailto}
              className="text-lime-400 underline"
            >
              let&apos;s be in touch.
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
