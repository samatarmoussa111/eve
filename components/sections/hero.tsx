import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MapPinIcon } from "lucide-react"

const stats = [
  { value: "100+", label: "Buyers helped" },
  { value: "First-time", label: "My specialty" },
  { value: "Auburn, ME", label: "Based here" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-screen-xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 lg:py-20">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-primary">
            <MapPinIcon className="size-3.5" />
            Auburn, Maine
          </div>

          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Buying a home in Maine is a big deal. Let&apos;s make sure you feel
            good about it.
          </h1>

          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m Eve — a buyer&apos;s agent based in Auburn, Maine. I work
            with people who are buying a home, often for the first time, and
            want someone in their corner who&apos;ll keep things honest and
            straightforward.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Let&apos;s have a conversation
                <ArrowRightIcon />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#process">See how I work</Link>
            </Button>
          </div>

          <div className="flex gap-8 border-t border-border pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-xl font-semibold text-primary">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="flex aspect-[3/4] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-accent">
            <div className="flex flex-col items-center gap-3">
              <div className="flex size-28 items-center justify-center rounded-full bg-primary/20">
                <span className="font-heading text-4xl font-semibold text-primary/60">
                  EA
                </span>
              </div>
              <p className="text-[10px] font-semibold tracking-widest uppercase text-primary/40">
                Eve Ali
              </p>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-background p-4 shadow-md ring-1 ring-foreground/5">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
              Recent closing
            </p>
            <p className="font-heading text-sm font-semibold">
              First home in Brunswick
            </p>
            <p className="text-xs font-semibold text-primary">
              First-time buyer, stress-free
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
