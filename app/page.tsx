import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Overview } from '@/components/overview'
import { Process } from '@/components/process'
import { Learning } from '@/components/learning'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Overview />
        <Process />
        <Learning />
      </main>
      <SiteFooter />
    </>
  )
}
