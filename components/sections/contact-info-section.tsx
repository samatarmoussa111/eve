import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from "lucide-react"

const contactDetails = [
  {
    Icon: PhoneIcon,
    label: "Phone",
    value: "(207) 777-0198",
    href: "tel:2077770198",
    note: "Call or text anytime",
  },
  {
    Icon: MailIcon,
    label: "Email",
    value: "eveali@tmree.com",
    href: "mailto:eveali@tmree.com",
    note: "I reply within 24–48 hours",
  },
  {
    Icon: MapPinIcon,
    label: "Office",
    value: "81 Main Street",
    href: null,
    note: "Auburn, Maine 04210",
  },
  {
    Icon: ClockIcon,
    label: "Hours",
    value: "Mon–Fri, flexible",
    href: null,
    note: "Evenings & weekends by arrangement",
  },
]

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
]

export function ContactInfoSection() {
  return (
    <section className="border-t border-border bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map(({ Icon, label, value, href, note }) => (
            <div key={label}>
              <div className="mb-3 flex items-center gap-2">
                <Icon className="size-4 text-primary" />
                <p className="text-[10px] font-semibold tracking-widest uppercase text-primary">
                  {label}
                </p>
              </div>
              {href ? (
                <a
                  href={href}
                  className="font-heading text-lg font-semibold transition-colors hover:text-primary"
                >
                  {value}
                </a>
              ) : (
                <p className="font-heading text-lg font-semibold">{value}</p>
              )}
              <p className="mt-1 text-xs text-muted-foreground">{note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <p className="mb-3 text-[10px] font-semibold tracking-widest uppercase text-primary">
            Follow
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="border border-border px-3 py-1.5 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
