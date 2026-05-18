import Link from "next/link"
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from "lucide-react"

import { type BlogPost } from "@/lib/data"

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

interface PostHeroProps {
  post: BlogPost
}

export function PostHero({ post }: PostHeroProps) {
  return (
    <section className="bg-muted/30 pb-0 pt-12 md:pt-16">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeftIcon className="size-3" />
            Back to Blog
          </Link>
          <p className="text-[10px] font-semibold tracking-widest uppercase text-primary">
            {post.category}
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CalendarIcon className="size-3.5 text-primary" />
              {formatDate(post.publishDate)}
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="size-3.5 text-primary" />
              {post.readTime}
            </span>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-3xl aspect-video w-full items-center justify-center bg-gradient-to-br from-primary/15 to-primary/5">
          <p className="px-4 text-center text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
            {post.imageAlt}
          </p>
        </div>
      </div>
    </section>
  )
}
