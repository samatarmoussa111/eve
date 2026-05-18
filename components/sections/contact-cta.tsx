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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-primary-foreground">
            <p className="text-[10px] font-semibold tracking-widest uppercase opacity-70">
              No pressure, just a conversation
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight md:text-4xl">
              Have questions about buying a home in Maine?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed opacity-80">
              You don&apos;t need to be ready to buy tomorrow. If you&apos;re
              thinking about it — or even just curious about what&apos;s
              realistic — I&apos;m happy to talk. No obligation.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm opacity-80">
              <p>
                <span className="font-semibold">Phone: </span>
                <a href="tel:2073452207" className="hover:opacity-100">
                  (207) 345-2207
                </a>
              </p>
              <p>
                <span className="font-semibold">Email: </span>
                <a href="mailto:eveali@tmree.com" className="hover:opacity-100">
                  eveali@tmree.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Office: </span>
                81 Main Street, Auburn, Maine 04210
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="mt-8 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/contact">
                Full contact page
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
                  Got it, thank you.
                </p>
                <p className="text-sm text-muted-foreground">
                  I&apos;ll read your message and get back to you within a day
                  or two. Looking forward to talking.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <p className="font-heading text-lg font-semibold">
                  Send me a message
                </p>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="cta-name">Your name</FieldLabel>
                    <Input id="cta-name" placeholder="Jane Smith" required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="cta-email">Email</FieldLabel>
                    <Input
                      id="cta-email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="cta-message">
                      What&apos;s on your mind?
                    </FieldLabel>
                    <Textarea
                      id="cta-message"
                      placeholder="I'm thinking about buying in the next year and have no idea where to start..."
                      rows={4}
                    />
                  </Field>
                </FieldGroup>
                <Button type="submit" className="w-full">
                  Send message
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
