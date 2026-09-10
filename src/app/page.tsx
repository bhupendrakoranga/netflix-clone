import { CtaSection } from "@/components/home/CtaSection";
import { FaqSection } from "@/components/home/FaqSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ReasonsSection } from "@/components/home/ReasonsSection";
import { TrendingSection } from "@/components/home/TrendingSection";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-[#050505] text-white">
        <HeroSection />
        <TrendingSection />
        <ReasonsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
