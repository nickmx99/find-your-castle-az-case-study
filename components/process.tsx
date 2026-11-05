import { BattlementRule } from '@/components/arch-motif'

const steps = [
  {
    title: 'Content and navigation',
    body: "Organized buyer, seller, and relocation information around visitors' questions. Expanded content to reflect service across the Phoenix Valley and help people considering a move to Arizona.",
  },
  {
    title: 'Mobile contact experience',
    body: 'Worked on direct-call links and onsite inquiry forms to give visitors clear ways to contact Peter. Reviewed mobile layouts and revised page elements based on how they looked and behaved on smaller screens.',
  },
  {
    title: 'Publishing and lead integration',
    body: 'Worked with Netlify hosting, a server-side Follow Up Boss lead handler, and Netlify Forms backup capture. Learned why private configuration belongs on the server and why inquiry capture needs a fallback.',
  },
  {
    title: 'Testing and iteration',
    body: 'Used link reviews, responsive visual checks, and deployment checks to guide improvements. Revisions included clearer brokerage identification, better logo proportions, and more useful page content.',
  },
]

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="mx-auto max-w-5xl px-6 py-20 md:py-28"
    >
      <BattlementRule />
      <h2
        id="process-title"
        className="mt-4 font-serif text-3xl tracking-tight text-foreground md:text-4xl"
      >
        How the project came together
      </h2>
      <ol className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
        {steps.map((step, index) => (
          <li key={step.title} className="bg-background p-8 md:p-10">
            <span
              aria-hidden="true"
              className="font-serif text-sm text-gold"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 font-serif text-2xl tracking-tight text-foreground">
              {step.title}
            </h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
