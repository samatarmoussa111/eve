import Link from "next/link"

import { cn } from "@/lib/utils"

export function LogoMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary",
        className
      )}
    >
      <svg
        viewBox="0 0 24 32"
        fill="currentColor"
        className="size-5 text-primary-foreground"
        aria-hidden="true"
      >
        <polygon points="12,1 20,12 4,12" />
        <polygon points="12,7 22,21 2,21" />
        <rect x="10.5" y="20" width="3" height="11" />
      </svg>
    </div>
  )
}

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2.5 leading-none transition-opacity hover:opacity-80",
        className
      )}
    >
      <LogoMark />
      <span className="font-heading text-base font-semibold tracking-widest">
        TMREE
      </span>
    </Link>
  )
}
