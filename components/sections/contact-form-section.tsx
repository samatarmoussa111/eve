"use client"

import { useState } from "react"
import { ArrowRightIcon, PhoneIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col gap-4 py-12">
                <div className="flex size-12 items-center justify-center bg-primary/10">
                  <ArrowRightIcon className="size-5 text-primary" />
                </div>
                <h2 className="font-heading text-3xl font-semibold">
                  Message Received!
                </h2>
                <p className="max-w-md text-muted-foreground">
                  Thank you for reaching out. I&apos;ll review your message and
                  get back to you within 24 hours to schedule your consultation.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-heading text-2xl font-semibold">
                  Send Me a Message
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 flex flex-col gap-8"
                >
                  <FieldGroup>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="full-name">Full Name</FieldLabel>
                        <Input
                          id="full-name"
                          placeholder="Jane Smith"
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(512) 555-0100"
                        />
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel htmlFor="contact-email">
                        Email Address
                      </FieldLabel>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="jane@example.com"
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="contact-message">Message</FieldLabel>
                      <Textarea
                        id="contact-message"
                        placeholder="Tell me about what you're looking for — neighborhood, budget, timeline, or any questions you have..."
                        rows={6}
                        required
                      />
                    </Field>
                  </FieldGroup>
                  <div>
                    <Button type="submit" size="lg">
                      Send Message
                      <ArrowRightIcon />
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6 bg-muted/40 p-8">
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-primary">
                  Prefer to Talk?
                </p>
                <h3 className="mt-3 font-heading text-xl font-semibold">
                  Schedule a Free Consultation
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Book a 30-minute call or in-person meeting. We&apos;ll discuss
                  your goals, answer your questions, and map out your next
                  steps — no commitment required.
                </p>
              </div>
              <Button asChild className="w-full">
                <a href="tel:5552345678">
                  <PhoneIcon />
                  Call (555) 234-5678
                </a>
              </Button>
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground">
                  Available Monday–Friday, 9am–6pm CT. Evening and weekend
                  appointments available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
