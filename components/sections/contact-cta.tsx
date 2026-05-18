"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export function ContactCta() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-primary-foreground">
            <p className="text-[10px] font-semibold tracking-widest uppercase opacity-70">
              Ready to Start?
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight md:text-4xl">
              Let&apos;s Find Your Dream Home
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed opacity-80">
              Whether you&apos;re just starting to explore or ready to make an
              offer, I&apos;m here to help. Reach out for a free, no-obligation
              consultation.
            </p>
            <div className="mt-8 flex flex-col gap-4 text-sm opacity-80">
              <p>
                <span className="font-semibold">Phone: </span>
                <a href="tel:5552345678" className="hover:opacity-100">
                  (555) 234-5678
                </a>
              </p>
              <p>
                <span className="font-semibold">Email: </span>
                <a
                  href="mailto:sarah@mitchellrealty.com"
                  className="hover:opacity-100"
                >
                  sarah@mitchellrealty.com
                </a>
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="mt-8 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/contact">
                Full Contact Page
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>

          <div className="bg-background p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <div className="flex size-12 items-center justify-center bg-primary/10">
                  <ArrowRightIcon className="size-5 text-primary" />
                </div>
                <p className="font-heading text-xl font-semibold">
                  Message Received!
                </p>
                <p className="text-sm text-muted-foreground">
                  Thank you for reaching out. I&apos;ll be in touch within 24
                  hours to schedule your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <p className="font-heading text-lg font-semibold">
                  Get in Touch
                </p>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="cta-name">Your Name</FieldLabel>
                    <Input
                      id="cta-name"
                      placeholder="Jane Smith"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="cta-email">Email Address</FieldLabel>
                    <Input
                      id="cta-email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="cta-message">
                      How can I help?
                    </FieldLabel>
                    <Textarea
                      id="cta-message"
                      placeholder="I'm looking for a 3BR home in Cedar Park under $450k..."
                      rows={4}
                    />
                  </Field>
                </FieldGroup>
                <Button type="submit" className="w-full">
                  Send Message
                  <ArrowRightIcon />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
