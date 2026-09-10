import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  title: string;
};

export function SectionShell({ children, className, id, title }: SectionShellProps) {
  return (
    <section className={cn("netflix-container py-8", className)} id={id}>
      <h2 className="mb-5 text-2xl leading-tight font-bold text-white sm:text-[32px]">{title}</h2>
      {children}
    </section>
  );
}
