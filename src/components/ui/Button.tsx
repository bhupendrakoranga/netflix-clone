import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  variant?: "primary" | "secondary";
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
};

const variants = {
  primary: "bg-[#e50914] text-white shadow-[0_14px_34px_rgba(229,9,20,0.32)] hover:bg-[#f6121d]",
  secondary: "border border-white/25 bg-black/45 text-white hover:bg-white/10",
};

function getButtonClassName(variant: keyof typeof variants, className?: string) {
  return cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className
  );
}

export function Button({
  children,
  className,
  icon = <ChevronRight aria-hidden className="h-5 w-5 shrink-0" />,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button className={getButtonClassName(variant, className)} type={type} {...props}>
      <span className="truncate">{children}</span>
      {icon}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  href,
  icon = <ChevronRight aria-hidden className="h-5 w-5 shrink-0" />,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={getButtonClassName(variant, className)} href={href} {...props}>
      <span className="truncate">{children}</span>
      {icon}
    </Link>
  );
}
