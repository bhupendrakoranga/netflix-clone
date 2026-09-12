"use client";

import { lazy, Suspense, useEffect, useRef, useState } from "react";

import { TrendingCarouselPreview } from "@/components/home/TrendingCarouselPreview";
import type { TrendingItem } from "@/lib/content";

const TrendingCarousel = lazy(() =>
  import("@/components/home/TrendingCarousel").then((module) => ({
    default: module.TrendingCarousel,
  }))
);

type LazyTrendingCarouselProps = {
  items: TrendingItem[];
};

export function LazyTrendingCarousel({ items }: LazyTrendingCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoadCarousel, setShouldLoadCarousel] = useState(false);

  useEffect(() => {
    if (shouldLoadCarousel) {
      return;
    }

    const container = containerRef.current;

    if (!container || !("IntersectionObserver" in window)) {
      setShouldLoadCarousel(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setShouldLoadCarousel(true);
        observer.disconnect();
      },
      { rootMargin: "640px 0px" }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [shouldLoadCarousel]);

  return (
    <div ref={containerRef}>
      {shouldLoadCarousel ? (
        <Suspense fallback={<TrendingCarouselPreview items={items} />}>
          <TrendingCarousel items={items} />
        </Suspense>
      ) : (
        <TrendingCarouselPreview items={items} />
      )}
    </div>
  );
}
