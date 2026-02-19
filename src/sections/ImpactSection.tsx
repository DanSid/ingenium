import React from 'react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { CASES } from '../data/site'

function CaseCard({
  challenge,
  decision,
  execution,
  outcome,
  metric,
}: {
  challenge: string
  decision: string
  execution: string
  outcome: string
  metric: string
}) {
  return (
    <div className="rounded-2xl border border-ink-900/10 bg-parchment-50/70 shadow-soft p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="font-display text-[18px] text-ink-900">Case Preview</div>
        <div className="rounded-xl bg-brand-600/10 px-3 py-2 text-[12px] font-semibold text-brand-700">{metric}</div>
      </div>
      <div className="mt-4 grid gap-3 text-[14px] leading-7 text-ink-800/75">
        <div><span className="font-semibold text-ink-900">Challenge:</span> {challenge}</div>
        <div><span className="font-semibold text-ink-900">Strategic Decision:</span> {decision}</div>
        <div><span className="font-semibold text-ink-900">Execution:</span> {execution}</div>
        <div><span className="font-semibold text-ink-900">Measured Outcome:</span> {outcome}</div>
      </div>
    </div>
  )
}

export default function ImpactSection() {
  return (
    <section id="impact" className="bg-parchment-grid section-divider">
      <Container className="py-14">
        <SectionHeader
          kicker="Impact"
          title="Impact demonstrated."
          body="Our work is measured through outcomes, not presentations. Structured decisions, disciplined execution, and market intelligence have produced meaningful growth across industries."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CASES.map((c, idx) => (
            <CaseCard key={idx} {...c} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <Button onClick={() => alert('Hook this CTA to a dedicated case studies page later.')}>Explore Full Impact</Button>
        </div>
      </Container>
    </section>
  )
}
