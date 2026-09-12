import { LazyTrendingCarousel } from "@/components/home/LazyTrendingCarousel";
import { SectionShell } from "@/components/ui/SectionShell";
import { trendingItems } from "@/lib/content";

export function TrendingSection() {
  return (
    <SectionShell id="trending" title="Trending Now">
      <LazyTrendingCarousel items={trendingItems} />
    </SectionShell>
  );
}
