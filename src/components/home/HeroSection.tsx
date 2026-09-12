import Image from "next/image";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { EmailSignup } from "@/components/ui/EmailSignup";

export function HeroSection() {
  return (
    <>
      <section className="hero-section relative isolate overflow-hidden bg-black">
        <div className="hero-media absolute -z-30">
          <Image
            alt=""
            className="object-cover object-center"
            fill
            preload
            sizes="100vw"
            src="/images/netflix-homepage-bg.jpg"
          />
        </div>
        <div className="absolute inset-0 -z-20 bg-black/55" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.38)_54%,rgba(0,0,0,0.84)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-black via-black/58 to-transparent" />

        <SiteHeader />

        <div className="hero-content netflix-container flex items-center justify-center text-center">
          <div className="max-w-[780px]">
            <h1 className="text-[40px] leading-[1.08] font-black tracking-[0] text-white sm:text-[56px] lg:text-[64px]">
              Unlimited movies,
              <br />
              shows, and more
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-tight font-bold text-white sm:text-2xl">
              Starts at ₹149. Cancel at any time.
            </p>
            <p className="mx-auto mt-9 max-w-3xl text-lg leading-7 font-semibold text-white sm:text-xl">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <EmailSignup className="mt-5" />
          </div>
        </div>
      </section>
      <div aria-hidden className="hero-curve relative overflow-hidden bg-[#050505]">
        <div className="hero-curve-line" />
      </div>
    </>
  );
}
