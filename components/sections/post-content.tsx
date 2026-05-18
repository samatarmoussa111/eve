import { type BlogPost } from "@/lib/data"

interface PostContentProps {
  post: BlogPost
}

export function PostContent({ post }: PostContentProps) {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div
          className="
            text-sm leading-relaxed text-foreground
            [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:leading-tight
            [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-semibold
            [&_p]:mb-5 [&_p]:text-muted-foreground [&_p]:leading-relaxed
            [&_ul]:mb-5 [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2
            [&_li]:text-muted-foreground [&_li]:leading-relaxed
            [&_strong]:font-semibold [&_strong]:text-foreground
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </section>
  )
}
