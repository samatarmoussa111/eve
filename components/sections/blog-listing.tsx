import Link from "next/link"
import { CalendarIcon, ArrowRightIcon, ClockIcon } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { type BlogPost } from "@/lib/data"

interface BlogListingProps {
  posts: BlogPost[]
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function BlogListing({ posts }: BlogListingProps) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <Card className="h-full pt-0 transition-shadow hover:shadow-md">
                <div className="flex aspect-video w-full items-center justify-center bg-gradient-to-br from-primary/15 to-primary/5">
                  <p className="px-4 text-center text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                    {post.imageAlt}
                  </p>
                </div>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground">
                    <span className="font-semibold tracking-widest uppercase text-primary">
                      {post.category}
                    </span>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="size-3" />
                      {formatDate(post.publishDate)}
                    </span>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1">
                      <ClockIcon className="size-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-heading text-lg font-semibold leading-tight">
                    {post.title}
                  </h2>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase text-primary transition-all group-hover:gap-2.5">
                    Read Article
                    <ArrowRightIcon className="size-3" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
