import { cn } from '@/lib/utils'

export function ArchMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 300"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn('text-gold-line', className)}
    >
      <path
        d="M20 300V120a100 100 0 0 1 200 0v180"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M50 300V124a70 70 0 0 1 140 0v176"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M80 300V128a40 40 0 0 1 80 0v172"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
      />
      <path d="M0 299h240" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function BattlementRule({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 12"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn('h-3 w-14 text-gold-line', className)}
    >
      <path
        d="M0 11h8V3h8v8h8V3h8v8h8V3h8v8h8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}
