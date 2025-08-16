"use client";

import { Dialog as DialogPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";
import { createContext, use, useState } from "react";

const VideoModal = DialogPrimitive.Root;

const VideoModalTrigger = DialogPrimitive.Trigger;

const VideoModalPortal = DialogPrimitive.Portal;

const VideoModalClose = DialogPrimitive.Close;

const VideoModalOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) => (
  <DialogPrimitive.Overlay
    className={cn(
      "data-[state=closed]:animate-modal-fade-out data-[state=open]:animate-modal-fade-in fixed inset-0 z-50 bg-black/5 backdrop-blur-xl",
      className,
    )}
    {...props}
  />
);

const VideoModalContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) => (
  <VideoModalPortal>
    <VideoModalOverlay />
    <DialogPrimitive.Content
      className={cn(
        "fixed left-1/2 top-1/2 z-50 flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 items-center justify-center p-3",
        "data-[state=closed]:animate-modal-fade-out data-[state=open]:animate-modal-fade-in data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[50%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[50%] transition-all",
        className,
      )}
      {...props}
    >
      <DialogPrimitive.Title className="sr-only">
        Video modal
      </DialogPrimitive.Title>
      <DialogPrimitive.Description className="sr-only">
        A word from our CEO: Seemore Foundation overview
      </DialogPrimitive.Description>

      <div className="relative mx-auto flex size-full items-center justify-center rounded-2xl border border-gray-950/10 bg-black/30">
        {/* Mobile close button */}
        <CloseIcon isMobile />

        <div className="flex h-4/5 w-full max-w-5xl gap-6">
          {/* Desktop close button */}
          <CloseIcon />
          <div className="flex w-full flex-col max-lg:p-4 max-lg:text-center">
            {children}
          </div>
        </div>
      </div>
    </DialogPrimitive.Content>
  </VideoModalPortal>
);

const VideoModalTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) => (
  <DialogPrimitive.Title
    className={cn("mb-4 text-4xl font-bold text-white", className)}
    {...props}
  />
);

const VideoModalDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) => (
  <DialogPrimitive.Description
    className={cn("mb-6 text-xl text-white/80", className)}
    {...props}
  />
);

const VideoPreview = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "absolute inset-0 z-10 transition-opacity duration-500 group-[.playing]:pointer-events-none group-[.playing]:opacity-0",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const VideoPlayButton = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 group-[.playing]:pointer-events-none group-[.playing]:opacity-0",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const VideoPlayerContext = createContext<{
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
} | null>(null);

const VideoPlayer = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <VideoPlayerContext.Provider value={{ isPlaying, setIsPlaying }}>
      <div
        className={cn(
          "group relative aspect-video max-w-4xl overflow-hidden rounded-xl border border-gray-950/[.1] object-cover",
          isPlaying && "playing",
          className,
        )}
        onClick={() => setIsPlaying(true)}
        {...props}
      >
        {children}
      </div>
    </VideoPlayerContext.Provider>
  );
};

const VideoModalVideo = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "aspect-video max-w-4xl overflow-hidden rounded-xl border border-gray-950/10 object-cover shadow-xl",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const CloseIcon = ({
  className,
  isMobile = false,
  ...props
}: React.ComponentProps<typeof VideoModalClose> & {
  isMobile?: boolean;
}) => (
  <VideoModalClose
    className={cn(
      "rounded-full border border-gray-50/30 bg-white/10 p-3 text-white transition duration-300 hover:bg-white/20",
      isMobile
        ? "absolute right-4 top-4 lg:hidden"
        : "hidden self-start lg:block",
      className,
    )}
    {...props}
  >
    <svg
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L11 11M11 1L1 11"
        className="stroke-current"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></path>
    </svg>
    <span className="sr-only">Close</span>
  </VideoModalClose>
);

const VideoIframe = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLIFrameElement> & { src: string }) => {
  const value = use(VideoPlayerContext);
  const isPlaying = value?.isPlaying;

  if (!isPlaying) {
    return null;
  }

  return (
    <iframe
      className={cn("size-full", className)}
      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
      allowFullScreen
      {...props}
    />
  );
};

export {
  VideoModal,
  VideoModalTrigger,
  VideoModalContent,
  VideoModalTitle,
  VideoModalDescription,
  VideoModalVideo,
  VideoPreview,
  VideoPlayButton,
  VideoPlayer,
  VideoIframe,
};
