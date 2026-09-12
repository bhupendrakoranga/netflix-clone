import type { RefObject } from "react";

import { TrendingCard } from "@/components/home/TrendingCard";
import type { TrendingItem } from "@/lib/content";

type TrendingCarouselTrackProps = {
  items: TrendingItem[];
  scrollerRef?: RefObject<HTMLOListElement | null>;
};

export function TrendingCarouselTrack({ items, scrollerRef }: TrendingCarouselTrackProps) {
  return (
    <ol
      aria-label="Trending titles"
      className="no-scrollbar flex scroll-px-6 gap-10 overflow-x-auto scroll-smooth pt-2 pr-16 pb-6 pl-6 sm:scroll-px-8 sm:gap-12 sm:pl-8 lg:gap-10 lg:pl-4"
      ref={scrollerRef}
    >
      {items.map((item) => (
        <TrendingCard item={item} key={item.rank} />
      ))}
    </ol>
  );
}
