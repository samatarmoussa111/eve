import Link from "next/link"
import { ArrowRightIcon, HomeIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "200+", label: "Homes Closed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Years Experience" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-screen-xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 lg:py-20">
        <div className="flex flex-col gap-6">
          <div>
            <Badge variant="secondary" className="mb-5 gap-1.5 text-primary">
              <HomeIcon className="size-3" />
              Buyer&apos;s Agent &middot; Austin, TX
            </Badge>
            <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Find Your Perfect Home With Confidence
            </h1>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m Sarah Mitchell — a dedicated buyer&apos;s agent helping
            home buyers navigate Austin&apos;s competitive market from first
            showing to closing day.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRightIcon />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#about">Learn More</Link>
            </Button>
          </div>
          <div className="flex gap-8 border-t border-border pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl font-semibold text-primary">
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
            <div className="flex flex-col items-center gap-3 text-primary/40">
              <div className="flex size-28 items-center justify-center rounded-full bg-primary/20">
                <span className="font-heading text-4xl font-semibold text-primary/60">
                  SM
                </span>
              </div>
              <p className="text-[10px] font-semibold tracking-widest uppercase text-primary/50">
                Professional Photo
              </p>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-background p-4 shadow-md ring-1 ring-foreground/5">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
              Recent Win
            </p>
            <p className="font-heading text-sm font-semibold">
              4BR in Cedar Park
            </p>
            <p className="text-xs font-semibold text-primary">
              $50K Under Asking Price
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
