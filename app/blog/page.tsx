import type { Metadata } from "next"

import { BlogHero } from "@/components/sections/blog-hero"
import { BlogListing } from "@/components/sections/blog-listing"
import { blogPosts } from "@/lib/data"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Real estate tips, neighborhood guides, and home buying advice from Austin buyer's agent Sarah Mitchell.",
}

export default function BlogPage() {
  return (
    <>
      <BlogHero
        title="Real Estate Insights for Austin Buyers"
        description="Practical advice, neighborhood guides, and market updates to help you buy with confidence in Austin and the surrounding area."
      />
      <BlogListing posts={blogPosts} />
    </>
  )
}
