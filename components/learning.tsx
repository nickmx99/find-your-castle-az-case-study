import { ArchMotif } from '@/components/arch-motif'

const lessons = [
  'Break a broad website idea into specific visitor tasks.',
  'Give AI tools clear requirements and review their output.',
  'Distinguish successful deployment from verified form delivery.',
  'Keep private configuration separate from public code.',
  'Document changes and test the behavior visitors rely on.',
]

export function Learning() {
  return (
    <section
      id="learning"
      aria-labelledby="learning-title"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <ArchMotif className="pointer-events-none absolute -bottom-6 right-6 hidden h-64 w-auto opacity-40 md:block" />
      <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold-line">
          Reflection
        </p>
        <h2
          id="learning-title"
          className="mt-4 font-serif text-3xl tracking-tight md:text-4xl"
        >
          What I learned
        </h2>
        <ol className="mt-10 max-w-2xl divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
          {lessons.map((lesson, index) => (
            <li key={lesson} className="flex gap-6 py-5">
              <span
                aria-hidden="true"
                className="w-6 shrink-0 font-serif text-gold-line"
              >
                {index + 1}
              </span>
              <span className="text-pretty text-lg leading-relaxed">
                {lesson}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
