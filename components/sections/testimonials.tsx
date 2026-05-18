import { StarIcon } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

const testimonials = [
  {
    name: "Jessica & Mark T.",
    location: "Cedar Park, TX",
    quote:
      "Sarah made buying our first home feel easy. She explained everything clearly, negotiated an amazing deal, and was always available when we had questions. We couldn't have done it without her!",
    rating: 5,
    result: "4BR in Cedar Park — $20K below asking",
  },
  {
    name: "David R.",
    location: "Round Rock, TX",
    quote:
      "I was skeptical about the process at first, but Sarah's market knowledge and patience won me over. She found us a great home in a neighborhood we hadn't even considered — and we absolutely love it.",
    rating: 5,
    result: "Closed in 32 days with minimal stress",
  },
  {
    name: "Priya & Raj S.",
    location: "Austin, TX",
    quote:
      "Moving from out of state, we needed an agent who truly knew the Austin market. Sarah's guidance was invaluable — she helped us find a home we love in a neighborhood that's perfect for our family.",
    rating: 5,
    result: "Seamless relocation from out of state",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="mb-12 text-center md:mb-16">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-primary">
            Client Stories
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight md:text-4xl">
            What My Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            Real stories from real buyers. Read what it&apos;s like to work
            with a buyer&apos;s agent who truly puts you first.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="flex flex-col">
              <CardHeader className="border-b border-border">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className="size-4 fill-primary text-primary"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-5">
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="mb-4 border-t border-border pt-4">
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-primary">
                      {t.result}
                    </p>
                  </div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
