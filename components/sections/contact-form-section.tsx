"use client"

import { useState } from "react"
import { ArrowRightIcon, PhoneIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
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
                  Got it — thank you.
                </h2>
                <p className="max-w-md text-muted-foreground">
                  I&apos;ll read your message and get back to you within a day
                  or two. Looking forward to talking.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-heading text-2xl font-semibold">
                  Send me a message
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tell me a bit about where you are in the process. There are
                  no wrong answers.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 flex flex-col gap-8"
                >
                  <FieldGroup>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="full-name">Your name</FieldLabel>
                        <Input
                          id="full-name"
                          placeholder="Jane Smith"
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="phone">
                          Phone (optional)
                        </FieldLabel>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(207) 555-0100"
                        />
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel htmlFor="contact-email">Email</FieldLabel>
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
                        placeholder="I'm thinking about buying in Auburn or Lewiston in the next 6 months. First-time buyer, not sure where to start..."
                        rows={6}
                        required
                      />
                    </Field>
                  </FieldGroup>
                  <div>
                    <Button type="submit" size="lg">
                      Send message
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
                  Prefer to talk?
                </p>
                <h3 className="mt-3 font-heading text-xl font-semibold">
                  Call or text me directly
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  I pick up when I can, and I always call back. If you
                  prefer, we can do a quick 15-minute call to see if
                  working together makes sense.
                </p>
              </div>
              <Button asChild className="w-full">
                <a href="tel:2077770198">
                  <PhoneIcon />
                  (207) 777-0198
                </a>
              </Button>
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground">
                  I&apos;m usually available Monday–Friday. Evening and
                  weekend calls are fine too — just text first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
