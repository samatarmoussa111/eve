import Link from "next/link"
import { ArrowRightIcon, CalendarIcon } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { type BlogPost } from "@/lib/data"

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

interface RelatedPostsProps {
  posts: BlogPost[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <p className="text-[10px] font-semibold tracking-widest uppercase text-primary">
          Keep Reading
        </p>
        <h2 className="mt-3 font-heading text-2xl font-semibold">
          Related Articles
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
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
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-primary">
                    {post.category}
                  </span>
                  <h3 className="font-heading text-base font-semibold leading-tight">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                    <CalendarIcon className="size-3" />
                    {formatDate(post.publishDate)}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-semibold tracking-widest uppercase text-primary transition-all group-hover:gap-2">
                    Read <ArrowRightIcon className="size-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
