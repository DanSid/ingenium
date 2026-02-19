import React from 'react'
import Container from '../components/Container'

const logos = [
  { name: 'ELEVATE' },
  { name: 'SYNERGY' },
  { name: 'GLX' },
  { name: 'AFRICA' },
]

export default function GlobalStrip() {
  return (
    <section className="bg-parchment-grid section-divider">
      <Container className="py-10">
        <div className="text-center">
          <div className="font-display text-[18px] text-ink-900">Over $100M in revenue generated for past partners.</div>
          <p className="mt-3 text-[15px] leading-7 text-ink-800/75">
            We have partnered with companies operating across Africa, the European Union, the United Kingdom, the United
            States, and Asia.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-ink-700/70">
            {logos.map((l) => (
              <div
                key={l.name}
                className="flex items-center gap-2 rounded-xl bg-parchment-50/70 px-5 py-3 shadow-insetLine"
              >
                <div className="h-2 w-2 rounded-full bg-ink-800/50" />
                <div className="text-[13px] tracking-[0.25em] font-semibold">{l.name}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
