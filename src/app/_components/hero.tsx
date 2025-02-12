import { Button } from "@/components/ui/button";
import { PlayCircleIcon, PlayIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";
import {
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

export default function Hero() {
  return (
    <section className="relative isolate flex h-[max(100vh,1000px)] w-full items-center justify-center sm:items-end">
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

      <div className="mt-20 flex flex-col items-center px-6 text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <h1 className="text-center font-scheherazade text-6xl font-medium sm:text-8xl">
            The Future of Islamic Knowledge
          </h1>

          <p className="mt-6 max-w-[460px] text-center">
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
                <VideoModalTitle>Modal Video Demo</VideoModalTitle>
                <VideoModalDescription>
                  Your subtitle or description here
                </VideoModalDescription>
                <VideoModalVideo>
                  <VideoPlayer>
                    <VideoPreview>
                      <img
                        src="https://cdn.dribbble.com/userupload/4145843/file/original-c7a2c9a768450460259f232259d103d2.png?resize=1600x1200"
                        alt="Video preview"
                      />
                    </VideoPreview>
                    <VideoPlayButton>
                      <button className="absolute inset-0 m-auto flex size-32 items-center justify-center rounded-full border border-white border-white/10 bg-white/50 transition duration-300 hover:bg-white/75">
                        <PlayCircleIcon className="size-20 stroke-1 text-white" />
                      </button>
                    </VideoPlayButton>
                    <iframe
                      className="size-full"
                      src="https://cdn.magicui.design/globe.mp4"
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                      allowFullScreen
                    />
                  </VideoPlayer>
                </VideoModalVideo>
              </VideoModalContent>
            </VideoModal>
          </div>
        </div>

        <div className="mx-auto mt-[150px] flex max-w-4xl flex-col gap-6 pb-[60px] sm:mt-[200px] sm:pb-[120px]">
          <h3 className="text-2xl font-bold">Reimagining Islamic Research</h3>
          <p>
            Seemorg Foundation is a nonprofit dedicated to advancing Islamic
            scholarship through AI. Founded in 2020, we are driven by a mission
            to make deep research more accessible, intuitive, and insightful.
            Our work isn’t just about automation, it’s about amplifying human
            intellect, bridging the past and future of knowledge.
          </p>

          <p className="text-white/70">
            If shaping the future of Islamic knowledge excites you,{" "}
            <a href="" className="text-lime-400 underline">
              let’s build it together
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
