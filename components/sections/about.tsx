import { CheckCircleIcon } from "lucide-react"

import { Separator } from "@/components/ui/separator"

const values = [
  {
    title: "I only work for you",
    description:
      "As a buyer's agent, I represent you — not the seller. My job is to protect your interests, full stop.",
  },
  {
    title: "I keep things simple",
    description:
      "Real estate has a lot of moving parts. I explain what's actually happening, in plain language, at every step.",
  },
  {
    title: "I'm honest with you",
    description:
      "If a house has problems, I'll tell you. If the price feels off, we'll talk about it. You deserve the full picture.",
  },
  {
    title: "I don't rush you",
    description:
      "This is one of the biggest decisions you'll make. I'll move at your pace and answer every question you have.",
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
                    EA
                  </span>
                </div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-primary/40">
                  Eve Ali
                </p>
              </div>
            </div>
            <div className="absolute -right-4 top-8 bg-primary px-5 py-4 text-primary-foreground">
              <p className="font-heading text-3xl font-semibold">Maine</p>
              <p className="text-[10px] font-semibold tracking-widest uppercase opacity-80">
                Licensed Realtor
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] font-semibold tracking-widest uppercase text-primary">
                About Eve
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight md:text-4xl">
                A client-first approach to buying a home in Maine.
              </h2>
            </div>
            <div className="flex flex-col gap-4 text-muted-foreground">
              <p className="leading-relaxed">
                I&apos;m Eve Ali, a Licensed Maine Realtor at The Maine Real
                Estate Experience — a full-service agency based in Auburn, ME.
                I focus on buyers, particularly people buying their first home,
                because that&apos;s where I feel I can make the most difference.
              </p>
              <p className="leading-relaxed">
                The Maine Real Estate Experience was built around trust,
                integrity, and giving clients the personalized attention they
                deserve. That&apos;s what I try to bring to every conversation
                — listening carefully to what you actually need, and helping you
                make decisions that are right for your life, not just for the
                deal.
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
            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted-foreground">
                Part of{" "}
                <span className="font-semibold text-foreground">
                  The Maine Real Estate Experience
                </span>{" "}
                — 81 Main St, Auburn, ME 04210 &middot;{" "}
                <a
                  href="tel:2073452207"
                  className="font-semibold text-foreground transition-colors hover:text-primary"
                >
                  (207) 345-2207
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
