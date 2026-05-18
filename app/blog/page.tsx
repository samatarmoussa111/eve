import type { Metadata } from "next"

import { BlogHero } from "@/components/sections/blog-hero"
import { BlogListing } from "@/components/sections/blog-listing"
import { blogPosts } from "@/lib/data"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Honest, practical writing about buying a home in Maine — from first-time buyer basics to neighborhood guides and what to expect at closing.",
}

export default function BlogPage() {
  return (
    <>
      <BlogHero
        title="Writing about buying a home in Maine"
        description="No jargon, no sales pitch. Just honest answers to the questions I hear most often from people going through this process."
      />
      <BlogListing posts={blogPosts} />
    </>
  )
}
