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
    title: "Initial Consultation",
    description:
      "We meet to discuss your goals, timeline, and budget. I answer all your questions and walk you through the entire buying process.",
  },
  {
    Icon: DollarSignIcon,
    number: "02",
    title: "Get Pre-Approved",
    description:
      "I connect you with trusted local lenders so you know your exact buying power before we start the home search.",
  },
  {
    Icon: SearchIcon,
    number: "03",
    title: "Home Search",
    description:
      "I curate listings that match your criteria and personally tour homes with you, evaluating each one with an expert eye.",
  },
  {
    Icon: FileTextIcon,
    number: "04",
    title: "Make an Offer",
    description:
      "When we find the right home, I craft a competitive offer and negotiate the best possible price and terms on your behalf.",
  },
  {
    Icon: CheckCircleIcon,
    number: "05",
    title: "Under Contract",
    description:
      "I manage inspections, appraisals, and all contingencies — keeping the process on track and stress-free from start to finish.",
  },
  {
    Icon: KeyIcon,
    number: "06",
    title: "Closing Day",
    description:
      "We review all closing documents, complete the final walkthrough, and I hand you the keys to your new home.",
  },
]

export function BuyingProcess() {
  return (
    <section id="process" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="mb-12 text-center md:mb-16">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-primary">
            How It Works
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight md:text-4xl">
            The Home Buying Process
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Buying a home doesn&apos;t have to be overwhelming. Here&apos;s
            exactly what to expect when you work with me.
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
