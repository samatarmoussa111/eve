import type { Metadata } from "next"

import { ContactHero } from "@/components/sections/contact-hero"
import { ContactFormSection } from "@/components/sections/contact-form-section"
import { ContactInfoSection } from "@/components/sections/contact-info-section"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sarah Mitchell, Austin buyer's agent. Schedule a free consultation or send a message — no pressure, no obligation.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <ContactInfoSection />
    </>
  )
}
