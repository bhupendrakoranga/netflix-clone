"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { TrendingCarouselTrack } from "@/components/home/TrendingCarouselTrack";
import type { TrendingItem } from "@/lib/content";

type TrendingCarouselProps = {
  items: TrendingItem[];
};

export function TrendingCarousel({ items }: TrendingCarouselProps) {
  const scrollerRef = useRef<HTMLOListElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  const updateScrollButtons = useCallback(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;

    setCanScrollBack(scroller.scrollLeft > 2);
    setCanScrollForward(scroller.scrollLeft < maxScrollLeft - 2);
  }, []);

  const scrollByPage = useCallback((direction: "back" | "forward") => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const amount = Math.max(scroller.clientWidth * 0.82, 240);

    scroller.scrollBy({
      left: direction === "forward" ? amount : -amount,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    updateScrollButtons();

    scroller.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      scroller.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons]);

  return (
    <div className="group/trending relative">
      <TrendingCarouselTrack items={items} scrollerRef={scrollerRef} />

      {canScrollBack ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-10 bg-[#050505] sm:block"
        />
      ) : null}

      {canScrollForward ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-10 bg-[#050505] sm:block"
        />
      ) : null}

      {canScrollBack ? (
        <button
          aria-label="Scroll trending titles back"
          className="absolute top-1/2 left-2 z-30 hidden h-[130px] w-6 -translate-y-1/2 items-center justify-center rounded-lg bg-[#1a1a1a]/95 text-white transition hover:bg-[#2a2a2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex"
          onClick={() => scrollByPage("back")}
          type="button"
        >
          <ChevronLeft aria-hidden className="h-7 w-7" />
        </button>
      ) : null}

      {canScrollForward ? (
        <button
          aria-label="Scroll trending titles forward"
          className="absolute top-1/2 right-2 z-30 flex h-[130px] w-6 -translate-y-1/2 items-center justify-center rounded-lg bg-[#1a1a1a]/95 text-white transition hover:bg-[#2a2a2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={() => scrollByPage("forward")}
          type="button"
        >
          <ChevronRight aria-hidden className="h-7 w-7" />
        </button>
      ) : null}
    </div>
  );
}
