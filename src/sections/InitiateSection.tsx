import React from 'react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'

export default function InitiateSection({ onInitiate }: { onInitiate: () => void }) {
  return (
    <section id="initiate" className="bg-parchment-grid section-divider">
      <Container className="py-14">
        <SectionHeader
          kicker="Initiate"
          title="Initiate."
          body="Begin a disciplined strategic engagement. Define the direction. Establish the framework. Move with intention."
        />

        <div className="mt-10 flex items-center justify-center">
          <Button onClick={onInitiate}>Initiate Strategic Engagement</Button>
        </div>

        <p className="mt-6 text-center text-[13px] leading-7 text-ink-800/70">
          This opens a gated consultation request form. In production, route submissions to your CRM or email workflow.
        </p>
      </Container>
    </section>
  )
}
