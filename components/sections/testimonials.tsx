import { StarIcon } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

const testimonials = [
  {
    name: "Matt & Carrie L.",
    location: "Brunswick, ME",
    quote:
      "We were completely new to this — we didn't even know what a pre-approval was. Eve walked us through everything without making us feel dumb. She never rushed us, and when we finally found our house, she caught a few things in the inspection we would have missed.",
    rating: 5,
    result: "First home, Brunswick",
  },
  {
    name: "Tom B.",
    location: "Lewiston, ME",
    quote:
      "I'd had a bad experience with an agent before who felt more interested in closing the deal than in what I actually wanted. Eve was different. She told me when a house wasn't worth the price, and I trusted that.",
    rating: 5,
    result: "Bought in Lewiston after 3 months of looking",
  },
  {
    name: "Jade & René F.",
    location: "Scarborough, ME",
    quote:
      "We relocated from out of state and were worried about buying somewhere we didn't know well. Eve knew the towns, the neighborhoods, the school districts. She helped us feel like we were making an informed choice, not just picking something because we were tired of looking.",
    rating: 5,
    result: "Relocated from out of state",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="mb-12 text-center md:mb-16">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-primary">
            From buyers I&apos;ve worked with
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight md:text-4xl">
            What people say
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            I&apos;d rather let people describe what it was actually like than
            tell you myself.
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
