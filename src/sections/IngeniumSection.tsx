import React from 'react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'

const points = [
  { title: 'Global Perspective', body: 'Institutional range across markets, shaped by local realities.' },
  { title: 'Institutional Standards', body: 'World-class systems, consistently applied and governed.' },
  { title: 'Integrated Teams', body: 'Strategy, creative range, and operational discipline in one house.' },
]

export default function IngeniumSection() {
  return (
    <section id="ingenium" className="bg-parchment-grid section-divider">
      <Container className="py-14">
        <SectionHeader
          kicker="Ingenium"
          title="Ingenium."
          body="Ingenium is a strategic house built on intelligence, creative range, and operational discipline. Our experience spans sectors and borders. Our standards are world class and consistently applied."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-ink-900/10 bg-parchment-50/70 shadow-soft p-6">
              <div className="font-display text-[18px] text-ink-900">{p.title}</div>
              <p className="mt-2 text-[14px] leading-7 text-ink-800/75">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
