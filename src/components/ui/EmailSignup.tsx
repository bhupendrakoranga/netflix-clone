import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type EmailSignupProps = {
  className?: string;
};

export function EmailSignup({ className }: EmailSignupProps) {
  return (
    <form action="#" className={cn("membership-form mx-auto", className)}>
      <label className="sr-only" htmlFor="membership-email">
        Email address
      </label>
      <input
        className="membership-input min-h-14 w-full rounded-md border border-white/45 bg-black/55 px-4 text-base text-white transition outline-none placeholder:text-white/72 focus:border-white focus:bg-black/70 sm:px-5 sm:text-xl"
        id="membership-email"
        name="email"
        placeholder="Email address"
        type="email"
      />
      <Button
        className="membership-submit min-h-14 w-full px-7 text-xl font-bold sm:text-3xl"
        icon={<ChevronRight aria-hidden className="h-7 w-7 shrink-0" />}
        type="submit"
      >
        Get Started
      </Button>
    </form>
  );
}
