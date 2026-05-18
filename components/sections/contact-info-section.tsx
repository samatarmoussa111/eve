import { MailIcon, PhoneIcon, ClockIcon } from "lucide-react"

const contactDetails = [
  {
    Icon: PhoneIcon,
    label: "Phone",
    value: "(555) 234-5678",
    href: "tel:5552345678",
    note: "Mon–Fri, 9am–6pm CT",
  },
  {
    Icon: MailIcon,
    label: "Email",
    value: "sarah@mitchellrealty.com",
    href: "mailto:sarah@mitchellrealty.com",
    note: "Response within 24 hours",
  },
  {
    Icon: ClockIcon,
    label: "Office Hours",
    value: "Mon–Fri 9am–6pm",
    href: null,
    note: "Evening & weekend appts available",
  },
]

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
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

          <div>
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
      </div>
    </section>
  )
}
