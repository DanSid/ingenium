import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import MorphingInWord from '../components/MorphingInWord'
import { HERO, QUIET_BANNERS } from '../data/site'
import { AnimatePresence, motion } from 'framer-motion'
import { useInterval } from '../components/utils'

export default function HeroSection({ onInitiate }: { onInitiate: () => void }) {
  const [bannerI, setBannerI] = React.useState(0)
  useInterval(() => setBannerI((v) => (v + 1) % QUIET_BANNERS.length), 5200)

  return (
    <section id="top" className="bg-parchment-grid">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-hero-sheen" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-horizon opacity-85" />

        <Container className="relative pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <h1 className="font-display text-[40px] leading-[1.06] text-ink-900 md:text-[58px]">
                {HERO.headline}
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-ink-800/80">{HERO.supporting}</p>
              <p className="mt-3 max-w-2xl text-[14px] leading-7 text-ink-800/70">{HERO.secondary}</p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button onClick={onInitiate}>{HERO.primaryCta}</Button>
                <Button variant="ghost" onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}>
                  {HERO.secondaryCta}
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-ink-900/10 bg-parchment-50/70 p-6 shadow-soft">
              <div className="text-[12px] tracking-[0.26em] text-ink-700/70 font-semibold">LINGUISTIC ARCHITECTURE</div>
              <div className="mt-3 font-display text-[30px] leading-[1.12] text-ink-900">
                <MorphingInWord
                  words={['Insight', 'Influence', 'Integrity', 'Impact', 'Ingenium']}
                  intervalMs={2300}
                  className=""
                />
              </div>
              <p className="mt-3 text-[14px] leading-7 text-ink-800/75">
                Each primary section begins with “In” — entry, immersion, and depth. We operate from within the problem,
                then govern execution to measurable outcomes.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-[13px] text-ink-800/75">
                <div className="rounded-xl bg-parchment-100/70 p-3 shadow-insetLine">
                  <div className="font-semibold text-ink-900">Cross-border</div>
                  <div className="mt-1">Africa • EU • UK • US • Asia</div>
                </div>
                <div className="rounded-xl bg-parchment-100/70 p-3 shadow-insetLine">
                  <div className="font-semibold text-ink-900">Governed</div>
                  <div className="mt-1">Strategy → systems → oversight</div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Quiet rotating banner */}
        <div className="relative border-t border-ink-900/10 bg-parchment-50/65 backdrop-blur">
          <Container className="py-5">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={bannerI}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="text-center"
              >
                <div className="font-display text-[18px] text-ink-900">{QUIET_BANNERS[bannerI].title}</div>
                <div className="mt-1 text-[13px] text-ink-800/70">{QUIET_BANNERS[bannerI].sub}</div>
              </motion.div>
            </AnimatePresence>
          </Container>
        </div>
      </div>
    </section>
  )
}
