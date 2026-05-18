import Link from "next/link"
import { MailIcon, PhoneIcon } from "lucide-react"

import { Separator } from "@/components/ui/separator"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/#areas", label: "Areas Served" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-heading text-xl font-semibold">Sarah Mitchell</p>
            <p className="mt-1 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
              Licensed Buyer&apos;s Agent · Austin, TX
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Helping home buyers navigate Austin&apos;s real estate market with
              confidence and clarity since 2015.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase">
              Quick Links
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-3.5">
              <li>
                <a
                  href="tel:5552345678"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <PhoneIcon className="size-3.5 shrink-0 text-primary" />
                  (555) 234-5678
                </a>
              </li>
              <li>
                <a
                  href="mailto:sarah@mitchellrealty.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <MailIcon className="size-3.5 shrink-0 text-primary" />
                  sarah@mitchellrealty.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase">
              Follow
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Sarah Mitchell. All rights
            reserved.
          </p>
          <p>Licensed in Texas &middot; DRE #TX-12345678</p>
        </div>
      </div>
    </footer>
  )
}
