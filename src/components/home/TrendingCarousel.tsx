"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import type { TrendingItem } from "@/lib/content";

type TrendingCarouselProps = {
  items: TrendingItem[];
};

function TrendingCard({ item }: { item: TrendingItem }) {
  return (
    <li className="relative shrink-0 pl-5">
      <article
        className="relative flex aspect-[2/3] w-[146px] overflow-hidden rounded-lg border border-white/10 p-4 shadow-2xl transition duration-200 hover:-translate-y-1 hover:border-white/30 sm:w-[178px]"
        style={{ background: item.background }}
      >
        <span
          aria-hidden
          className="rank-number absolute bottom-3 -left-1 text-7xl leading-none font-black sm:text-8xl"
        >
          {item.rank}
        </span>
        <div className="mt-auto w-full rounded-md bg-black/45 p-3 backdrop-blur">
          <p className="text-xs font-semibold text-white/72 uppercase">{item.category}</p>
          <h3 className="mt-1 text-sm leading-tight font-bold break-words text-white sm:text-base">
            {item.title}
          </h3>
        </div>
      </article>
    </li>
  );
}

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
      <ol
        aria-label="Trending titles"
        className="no-scrollbar flex scroll-px-5 gap-4 overflow-x-auto scroll-smooth pt-1 pr-12 pb-3"
        ref={scrollerRef}
      >
        {items.map((item) => (
          <TrendingCard item={item} key={item.rank} />
        ))}
      </ol>

      {canScrollBack ? (
        <button
          aria-label="Scroll trending titles back"
          className="absolute top-1/2 left-0 hidden h-[148px] w-9 -translate-y-1/2 items-center justify-center rounded-md bg-[#1a1a1a]/90 text-white transition hover:bg-[#2a2a2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex"
          onClick={() => scrollByPage("back")}
          type="button"
        >
          <ChevronLeft aria-hidden className="h-7 w-7" />
        </button>
      ) : null}

      {canScrollForward ? (
        <button
          aria-label="Scroll trending titles forward"
          className="absolute top-1/2 right-0 flex h-[148px] w-9 -translate-y-1/2 items-center justify-center rounded-md bg-[#1a1a1a]/90 text-white transition hover:bg-[#2a2a2a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          onClick={() => scrollByPage("forward")}
          type="button"
        >
          <ChevronRight aria-hidden className="h-7 w-7" />
        </button>
      ) : null}
    </div>
  );
}
