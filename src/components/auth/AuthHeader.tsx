import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type AuthHeaderProps = {
  className?: string;
  containerClassName?: string;
  logoClassName?: string;
  showSignIn?: boolean;
};

export function AuthHeader({
  className,
  containerClassName,
  logoClassName,
  showSignIn = false,
}: AuthHeaderProps) {
  return (
    <header className={cn("border-b border-white/10", className)}>
      <div
        className={cn(
          "auth-container flex items-start",
          showSignIn ? "justify-between" : "h-[82px] pt-3.5",
          containerClassName
        )}
      >
        <Link
          aria-label="Netflix clone home"
          className={cn("relative block w-24 sm:w-[150px]", logoClassName)}
          href="/"
        >
          <Image
            alt="Netflix"
            className="h-auto w-full"
            height={51}
            priority
            src="/images/netflix-wordmark.svg"
            width={188}
          />
        </Link>
        {showSignIn ? (
          <Link
            className="mt-1 inline-flex h-9 items-center justify-center rounded-[4px] bg-[#e50914] px-4 text-sm font-bold text-white transition-colors hover:bg-[#f6121d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-10 sm:px-[18px] sm:text-base"
            href="/login"
          >
            Sign In
          </Link>
        ) : null}
      </div>
    </header>
  );
}
