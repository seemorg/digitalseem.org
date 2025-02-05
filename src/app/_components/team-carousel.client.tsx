"use client";

import { Carousel, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function TeamCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      className="relative mt-12"
      orientation="horizontal"
      setApi={setApi}
    >
      {children}

      <div className="mt-12 flex items-center justify-center gap-4 sm:hidden">
        {new Array(count).fill(null).map((_, idx) => (
          <span
            key={idx}
            className={cn(
              "h-2 w-2 rounded-full",
              current === idx + 1
                ? "bg-primary-foreground"
                : "bg-primary-foreground/25",
            )}
          />
        ))}
      </div>
    </Carousel>
  );
}
