import { CheckCircleIcon } from "lucide-react"

import { Separator } from "@/components/ui/separator"

const values = [
  {
    title: "Client-First Approach",
    description:
      "Your goals, timeline, and budget are my top priority — every decision is made with your best interest in mind.",
  },
  {
    title: "Deep Market Knowledge",
    description:
      "Ten years in Austin real estate means I know the neighborhoods, the trends, and the hidden opportunities.",
  },
  {
    title: "Transparent Communication",
    description:
      "No surprises. I keep you informed at every step with clear, honest, proactive communication.",
  },
  {
    title: "Strong Negotiation",
    description:
      "I fight for the best possible price and terms so you can buy with confidence and peace of mind.",
  },
]

export function About() {
  return (
    <section id="about" className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="flex aspect-square w-full items-center justify-center bg-gradient-to-br from-primary/15 to-primary/5">
              <div className="flex flex-col items-center gap-3">
                <div className="flex size-24 items-center justify-center rounded-full bg-primary/20">
                  <span className="font-heading text-3xl font-semibold text-primary/60">
                    SM
                  </span>
                </div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-primary/40">
                  Agent Photo
                </p>
              </div>
            </div>
            <div className="absolute -right-4 top-8 bg-primary px-5 py-4 text-primary-foreground">
              <p className="font-heading text-3xl font-semibold">10+</p>
              <p className="text-[10px] font-semibold tracking-widest uppercase opacity-80">
                Years Experience
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] font-semibold tracking-widest uppercase text-primary">
                About Me
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight md:text-4xl">
                A Buyer&apos;s Agent Who Truly Works for You
              </h2>
            </div>
            <div className="flex flex-col gap-4 text-muted-foreground">
              <p className="leading-relaxed">
                I&apos;m Sarah Mitchell — a licensed real estate buyer&apos;s
                agent based in Austin, TX. For over a decade, I&apos;ve helped
                hundreds of buyers, including first-time homeowners, find the
                right home at the right price.
              </p>
              <p className="leading-relaxed">
                My job is simple: represent you — and only you — throughout the
                entire buying process. From understanding your needs to
                negotiating your offer and guiding you through closing, I&apos;m
                by your side every step of the way.
              </p>
            </div>
            <Separator />
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="flex gap-3">
                  <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">{value.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
