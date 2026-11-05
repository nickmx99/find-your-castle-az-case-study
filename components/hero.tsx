import { ArrowUpRight } from 'lucide-react'
import { ArchMotif } from '@/components/arch-motif'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="page-title"
      className="relative overflow-hidden"
    >
      <div className="mx-auto grid max-w-5xl gap-12 px-6 pb-20 pt-16 md:grid-cols-[1fr_auto] md:items-end md:pb-28 md:pt-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">
            A project by Nick Castellucci
          </p>
          <h1
            id="page-title"
            className="mt-5 text-balance font-serif text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Find Your Castle AZ: From idea to live website
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {"A practical website project for my dad's Arizona real-estate business. I used AI-assisted tools to plan the site, refine its content, connect inquiry forms, and work through publishing and quality checks."}
          </p>
          <p className="mt-4 max-w-xl border-l-2 border-gold pl-3 text-sm leading-relaxed text-foreground/85">
            <span className="font-medium text-foreground">My contribution:</span>{' '}
            planning, content decisions, review, and iteration—with AI assistance.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://findyourcastleaz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View the real-estate website
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href="https://github.com/nickmx99"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-foreground/25 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/60"
            >
              Visit my GitHub
              <ArrowUpRight className="size-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
        <ArchMotif className="hidden h-72 w-auto md:block" />
      </div>
    </section>
  )
}
