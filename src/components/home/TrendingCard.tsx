import Image from "next/image";

import type { TrendingItem } from "@/lib/content";

type TrendingCardProps = {
  item: TrendingItem;
};

export function TrendingCard({ item }: TrendingCardProps) {
  const posterAlt = item.posterAlt ?? item.title;

  return (
    <li className="relative shrink-0">
      <article
        className="relative z-10 flex aspect-[7/10] w-[150px] overflow-hidden rounded-lg border border-white/10 bg-[#181818] shadow-2xl transition duration-200 hover:-translate-y-1 hover:border-white/30 sm:w-[160px] lg:w-[190px]"
        style={item.posterSrc ? undefined : { background: item.background }}
      >
        {item.posterSrc ? (
          <Image
            alt={posterAlt}
            className="object-cover"
            fill
            loading="lazy"
            sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 226px"
            src={item.posterSrc}
          />
        ) : null}
        {!item.posterSrc ? <div className="absolute inset-0 bg-black/5" /> : null}
        {!item.posterSrc ? (
          <div className="relative z-10 mt-auto w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-16 pl-8 sm:p-5 sm:pt-20 sm:pl-10">
            <p className="text-xs font-bold text-white/76 uppercase">{item.category}</p>
            <h3 className="mt-1 text-sm leading-tight font-bold break-words text-white sm:text-base">
              {item.title}
            </h3>
          </div>
        ) : null}
      </article>
      <span
        aria-hidden
        className="rank-number pointer-events-none absolute bottom-3 -left-5 z-20 text-[72px] leading-[0.8] font-black sm:-left-6 sm:text-[96px] lg:-left-3 lg:text-[100px]"
      >
        {item.rank}
      </span>
    </li>
  );
}
