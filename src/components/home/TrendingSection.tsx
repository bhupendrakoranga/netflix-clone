import { SectionShell } from "@/components/ui/SectionShell";
import { TrendingCarousel } from "@/components/home/TrendingCarousel";
import { trendingItems } from "@/lib/content";

export function TrendingSection() {
  return (
    <SectionShell id="trending" title="Trending Now">
      <TrendingCarousel items={trendingItems} />
    </SectionShell>
  );
}
