interface BlogHeroProps {
  title: string
  description: string
}

export function BlogHero({ title, description }: BlogHeroProps) {
  return (
    <section className="bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-primary">
            Blog
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
