import { ChevronDown, Languages } from "lucide-react";

import { cn } from "@/lib/utils";

type LanguageSelectProps = {
  className?: string;
};

export function LanguageSelect({ className }: LanguageSelectProps) {
  return (
    <label className={cn("relative inline-flex items-center", className)}>
      <span className="sr-only">Select language</span>
      <Languages aria-hidden className="pointer-events-none absolute left-3 h-4 w-4 text-white" />
      <select
        aria-label="Select language"
        className="h-10 w-[64px] appearance-none rounded-md border border-white/40 bg-black/55 py-1.5 pr-8 pl-9 text-base font-medium text-white transition outline-none focus:border-white sm:w-[156px]"
        defaultValue="English"
      >
        <option>English</option>
        <option>Hindi</option>
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute right-2.5 h-4 w-4 text-white"
      />
    </label>
  );
}
