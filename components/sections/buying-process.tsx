import {
  MessageSquareIcon,
  DollarSignIcon,
  SearchIcon,
  FileTextIcon,
  CheckCircleIcon,
  KeyIcon,
} from "lucide-react"

const steps = [
  {
    Icon: MessageSquareIcon,
    number: "01",
    title: "We talk first",
    description:
      "No commitment, no pressure. We have a conversation about what you're looking for, what your timeline is, and what's on your mind. It's also a chance for you to see if we're a good fit.",
  },
  {
    Icon: DollarSignIcon,
    number: "02",
    title: "Figure out financing",
    description:
      "Before we look at homes, it helps to know what you can actually spend. I'll connect you with a lender I trust so you can get pre-approved and feel confident going in.",
  },
  {
    Icon: SearchIcon,
    number: "03",
    title: "Look at homes together",
    description:
      "I'll send you listings that match what you're after, and we'll visit homes together. I'll point out things you might not notice — good and bad — so you can make a real decision.",
  },
  {
    Icon: FileTextIcon,
    number: "04",
    title: "Make an offer",
    description:
      "Found something you like? I'll look at what similar homes have sold for and help you put together an offer that makes sense — not too low to be ignored, not more than it's worth.",
  },
  {
    Icon: CheckCircleIcon,
    number: "05",
    title: "Work through the details",
    description:
      "Once you're under contract, there's inspection, appraisal, and paperwork. I'll walk you through all of it and flag anything that needs your attention so nothing catches you off guard.",
  },
  {
    Icon: KeyIcon,
    number: "06",
    title: "Get your keys",
    description:
      "We do a final walkthrough, you sign the closing documents, and that's it — the home is yours. I'll be there for that part too.",
  },
]

export function BuyingProcess() {
  return (
    <section id="process" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="mb-12 text-center md:mb-16">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-primary">
            How it works
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight md:text-4xl">
            Here&apos;s what buying a home actually looks like
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            A lot of people find the process confusing because no one ever
            explained it to them clearly. Here&apos;s what happens, step by
            step, when we work together.
          </p>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ Icon, number, title, description }) => (
            <div
              key={number}
              className="flex flex-col gap-5 bg-background p-8 transition-colors hover:bg-muted/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex size-10 items-center justify-center bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <span className="font-heading text-4xl font-semibold text-border select-none">
                  {number}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
