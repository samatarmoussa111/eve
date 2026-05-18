"use client"

import { useState } from "react"
import { LinkIcon, Share2Icon, CheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

const shareNetworks = [
  {
    label: "X / Twitter",
    getUrl: (title: string, url: string) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  },
  {
    label: "Facebook",
    getUrl: (_: string, url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    label: "LinkedIn",
    getUrl: (_: string, url: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
]

interface SocialShareProps {
  title: string
}

export function SocialShare({ title }: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section className="border-y border-border bg-background py-8">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
            <Share2Icon className="size-3.5" />
            Share this article
          </div>
          <div className="flex flex-wrap gap-2">
            {shareNetworks.map(({ label, getUrl }) => (
              <Button
                key={label}
                variant="outline"
                size="xs"
                asChild
              >
                <a
                  href={getUrl(
                    title,
                    typeof window !== "undefined" ? window.location.href : ""
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              </Button>
            ))}
            <Button
              variant="outline"
              size="xs"
              onClick={copyLink}
              className="gap-1.5"
            >
              {copied ? (
                <>
                  <CheckIcon className="size-3" />
                  Copied!
                </>
              ) : (
                <>
                  <LinkIcon className="size-3" />
                  Copy Link
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
