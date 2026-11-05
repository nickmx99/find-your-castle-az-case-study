import { BattlementRule } from '@/components/arch-motif'

export function SiteFooter() {
  return (
    <footer
      id="credits"
      aria-labelledby="credits-title"
      className="mx-auto max-w-5xl px-6 py-16"
    >
      <BattlementRule />
      <h2
        id="credits-title"
        className="mt-4 font-serif text-2xl tracking-tight text-foreground"
      >
        Credits and contribution
      </h2>
      <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
        AI-assisted project. Planning, requirements, content decisions, review
        and iteration by Nick Castellucci, with AI tools used to help produce
        and revise the implementation.
      </p>
      <dl className="mt-8 grid gap-4 border-t border-border pt-6 text-sm sm:grid-cols-2">
        <div>
          <dt className="font-medium text-foreground">Original website tools</dt>
          <dd className="mt-1 text-muted-foreground">
            HTML, CSS, JavaScript, Netlify, Follow Up Boss.
          </dd>
        </div>
        <div>
          <dt className="font-medium text-foreground">This case-study page</dt>
          <dd className="mt-1 text-muted-foreground">Built in v0.</dd>
        </div>
      </dl>
      <div className="mt-10 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground">Nick Castellucci</p>
        <a
          href="#top"
          className="text-foreground underline decoration-gold-line underline-offset-4 hover:decoration-foreground"
        >
          Back to top
        </a>
      </div>
    </footer>
  )
}
