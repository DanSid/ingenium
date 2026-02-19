import React from 'react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { BRAND_POINTS } from '../data/site'

import showcase from '../assets/brand-systems-showcase.jpg'

export default function BrandSystemsSection() {
  return (
    <section id="brand-systems" className="bg-parchment-grid section-divider">
      <Container className="py-14">
        <SectionHeader
          kicker="Brand Systems"
          title="Brand systems engineered for scale."
          body="Identity is infrastructure. We design positioning frameworks, messaging systems, and visual architecture that hold across markets and over time. Creativity is applied with structural discipline."
        />

        <div className="mt-10 grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="rounded-2xl border border-ink-900/10 bg-parchment-50/70 p-6 shadow-soft">
            <div className="text-[12px] tracking-[0.28em] text-ink-700/70 font-semibold">SYSTEM COMPONENTS</div>
            <ul className="mt-4 space-y-3">
              {BRAND_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-brand-600" />
                  <div className="text-[15px] leading-7 text-ink-900/90">{p}</div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] leading-7 text-ink-800/75">
              We don’t “fake it until we make it.” We build brand infrastructure that can survive expansion, time, and
              operational pressure.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-parchment-50/70 shadow-soft">
            <img src={showcase} alt="Brand systems showcase" className="h-full w-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  )
}
