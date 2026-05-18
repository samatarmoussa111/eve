import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { PostHero } from "@/components/sections/post-hero"
import { PostContent } from "@/components/sections/post-content"
import { SocialShare } from "@/components/sections/social-share"
import { RelatedPosts } from "@/components/sections/related-posts"
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const relatedPosts = getRelatedPosts(slug)

  return (
    <>
      <PostHero post={post} />
      <PostContent post={post} />
      <SocialShare title={post.title} />
      <RelatedPosts posts={relatedPosts} />
    </>
  )
}
