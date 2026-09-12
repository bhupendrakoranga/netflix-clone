import { TrendingCarouselTrack } from "@/components/home/TrendingCarouselTrack";
import type { TrendingItem } from "@/lib/content";

type TrendingCarouselPreviewProps = {
  items: TrendingItem[];
};

export function TrendingCarouselPreview({ items }: TrendingCarouselPreviewProps) {
  return (
    <div className="relative">
      <TrendingCarouselTrack items={items} />
    </div>
  );
}
