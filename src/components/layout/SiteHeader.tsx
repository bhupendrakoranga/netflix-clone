import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { LanguageSelect } from "@/components/ui/LanguageSelect";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="netflix-container flex items-center justify-between gap-4 py-8">
        <a
          aria-label="Netflix clone home"
          className="relative block h-auto w-24 sm:w-36 lg:w-[188px]"
          href="#"
        >
          <Image
            alt="Netflix"
            className="h-auto w-full"
            height={51}
            loading="eager"
            src="/images/netflix-wordmark.svg"
            width={188}
          />
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSelect />
          <Button
            className="h-10 min-h-10 px-4 text-sm font-bold sm:min-w-[96px]"
            icon={null}
            variant="primary"
          >
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
