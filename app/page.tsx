import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { BuyingProcess } from "@/components/sections/buying-process"
import { AreasServed } from "@/components/sections/areas-served"
import { Testimonials } from "@/components/sections/testimonials"
import { ContactCta } from "@/components/sections/contact-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <BuyingProcess />
      <AreasServed />
      <Testimonials />
      <ContactCta />
    </>
  )
}
