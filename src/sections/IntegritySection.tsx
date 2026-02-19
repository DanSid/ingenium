import React from 'react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { INTEGRITY_POINTS } from '../data/site'
import visual from '../assets/integrity-visual.jpg'

export default function IntegritySection() {
  return (
    <section id="integrity" className="bg-parchment-grid section-divider">
      <Container className="py-14">
        <SectionHeader
          kicker="Integrity"
          title="Integrity governs execution."
          body="Strategy without oversight weakens quickly. We remain accountable through vendor coordination, implementation control, and structured performance monitoring. Ambition is protected through governance."
        />

        <div className="mt-10 grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="rounded-2xl border border-ink-900/10 bg-parchment-50/70 p-6 shadow-soft">
            <div className="text-[12px] tracking-[0.28em] text-ink-700/70 font-semibold">GOVERNANCE</div>
            <ul className="mt-4 space-y-3">
              {INTEGRITY_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-brand-600" />
                  <div className="text-[15px] leading-7 text-ink-900/90">{p}</div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] leading-7 text-ink-800/75">
              We protect strategic intent during execution: coordinated partners, quality assurance, and disciplined review.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-parchment-50/70 shadow-soft">
            <img src={visual} alt="Governance visual" className="h-full w-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  )
}
