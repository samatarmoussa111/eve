import type { Metadata } from "next"

import { ContactHero } from "@/components/sections/contact-hero"
import { ContactFormSection } from "@/components/sections/contact-form-section"
import { ContactInfoSection } from "@/components/sections/contact-info-section"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Eve Ali, buyer's agent in Auburn, Maine. Whether you're ready to start or just have questions, reach out — no commitment needed.",
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
