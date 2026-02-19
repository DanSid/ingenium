import React from 'react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { INFLUENCE_POINTS } from '../data/site'
import visual from '../assets/influence-visual.jpg'

export default function InfluenceSection() {
  return (
    <section id="influence" className="bg-parchment-grid section-divider">
      <Container className="py-14">
        <SectionHeader
          kicker="Influence"
          title="Influence shapes markets."
          body="Campaign and communications strategies are built to alter perception and generate measurable movement. Market entry and expansion demand coordinated messaging and controlled execution."
        />

        <div className="mt-10 grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-parchment-50/70 shadow-soft">
            <img src={visual} alt="Campaign visual" className="h-full w-full object-cover" />
          </div>

          <div className="rounded-2xl border border-ink-900/10 bg-parchment-50/70 p-6 shadow-soft">
            <div className="text-[12px] tracking-[0.28em] text-ink-700/70 font-semibold">FOCUS AREAS</div>
            <ul className="mt-4 space-y-3">
              {INFLUENCE_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-brand-600" />
                  <div className="text-[15px] leading-7 text-ink-900/90">{p}</div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] leading-7 text-ink-800/75">
              Visuals are controlled. Layouts are clean. Motion is restrained — a quiet shift, not a spectacle.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
