import Link from "next/link"
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/layout/logo"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "How It Works" },
  { href: "/#areas", label: "Areas Served" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Helping people buy homes in Maine — with honesty, patience, and
              no pressure. Based in Auburn.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase">
              Pages
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
                  href="tel:2077770198"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <PhoneIcon className="size-3.5 shrink-0 text-primary" />
                  (207) 777-0198
                </a>
              </li>
              <li>
                <a
                  href="mailto:eveali@tmree.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <MailIcon className="size-3.5 shrink-0 text-primary" />
                  eveali@tmree.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPinIcon className="mt-0.5 size-3.5 shrink-0 text-primary" />
                <span>81 Main Street<br />Auburn, Maine 04210</span>
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
            &copy; {new Date().getFullYear()} The Maine Real Estate Experience.
            All rights reserved.
          </p>
          <p>Licensed in Maine &middot; eveali@tmree.com</p>
        </div>
      </div>
    </footer>
  )
}
