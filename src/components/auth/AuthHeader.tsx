import Image from "next/image";
import Link from "next/link";

export function AuthHeader() {
  return (
    <header className="border-b border-white/10">
      <div className="auth-container flex h-[82px] items-start pt-3.5">
        <Link aria-label="Netflix clone home" className="relative block w-24 sm:w-[150px]" href="/">
          <Image
            alt="Netflix"
            className="h-auto w-full"
            height={51}
            priority
            src="/images/netflix-wordmark.svg"
            width={188}
          />
        </Link>
      </div>
    </header>
  );
}
