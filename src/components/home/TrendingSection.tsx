import { SectionShell } from "@/components/ui/SectionShell";
import { trendingItems, type TrendingItem } from "@/lib/content";

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

export function TrendingSection() {
  return (
    <SectionShell id="trending" title="Trending Now">
      <ol className="flex [scrollbar-width:thin] gap-4 overflow-x-auto pt-1 pb-4">
        {trendingItems.map((item) => (
          <TrendingCard item={item} key={item.rank} />
        ))}
      </ol>
    </SectionShell>
  );
}
