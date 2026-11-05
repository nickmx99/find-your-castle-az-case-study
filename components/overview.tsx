import { BattlementRule } from '@/components/arch-motif'

const facts = [
  { term: 'Project', detail: 'Website for an Arizona real-estate business' },
  { term: 'Audience', detail: 'Phoenix Valley buyers, sellers, and people relocating to Arizona' },
  { term: 'My role', detail: 'Planning, requirements, content decisions, review, and iteration' },
  { term: 'Approach', detail: 'AI-assisted implementation, reviewed and revised by me' },
]

export function Overview() {
  return (
    <section
      id="overview"
      aria-labelledby="overview-title"
      className="border-y border-border bg-card"
    >
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1fr_1.2fr] md:gap-16 md:py-20">
        <div>
          <BattlementRule />
          <h2
            id="overview-title"
            className="mt-4 font-serif text-3xl tracking-tight text-foreground"
          >
            Overview
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            The goal was to make it easier for Phoenix Valley buyers, sellers,
            and people moving to Arizona to find useful information and contact
            Peter Castellucci.
          </p>
        </div>
        <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.term} className="border-t border-gold-line/60 pt-4">
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-gold">
                {fact.term}
              </dt>
              <dd className="mt-2 leading-relaxed text-foreground">
                {fact.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
