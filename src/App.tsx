import React from 'react'
import NavBar from './components/NavBar'
import Modal from './components/Modal'
import Container from './components/Container'
import Button from './components/Button'
import { NAV } from './data/site'
import { useActiveSection } from './components/utils'

import HeroSection from './sections/HeroSection'
import GlobalStrip from './sections/GlobalStrip'
import InsightSection from './sections/InsightSection'
import BrandSystemsSection from './sections/BrandSystemsSection'
import InfluenceSection from './sections/InfluenceSection'
import IntegritySection from './sections/IntegritySection'
import ImpactSection from './sections/ImpactSection'
import IngeniumSection from './sections/IngeniumSection'
import InitiateSection from './sections/InitiateSection'
import Footer from './sections/Footer'

function ConsultationForm({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = React.useState<'idle' | 'sent'>('idle')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Demo-only — wire to backend / email / CRM later
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div>
        <div className="font-display text-[22px] text-ink-900">Request received.</div>
        <p className="mt-3 text-[14px] leading-7 text-ink-800/75">
          This is a front-end demo. In production, route this to your CRM or an email workflow.
        </p>
        <div className="mt-6 flex justify-end">
          <Button onClick={onClose}>Done</Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <label className="text-[13px] font-semibold text-ink-900">Name</label>
        <input
          required
          className="h-11 rounded-xl bg-parchment-100/70 px-4 shadow-insetLine outline-none focus:ring-2 focus:ring-brand-600/30"
          placeholder="Your name"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-[13px] font-semibold text-ink-900">Email</label>
        <input
          required
          type="email"
          className="h-11 rounded-xl bg-parchment-100/70 px-4 shadow-insetLine outline-none focus:ring-2 focus:ring-brand-600/30"
          placeholder="you@company.com"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-[13px] font-semibold text-ink-900">Company / Market</label>
        <input
          className="h-11 rounded-xl bg-parchment-100/70 px-4 shadow-insetLine outline-none focus:ring-2 focus:ring-brand-600/30"
          placeholder="Company name, region"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-[13px] font-semibold text-ink-900">What do you want to solve?</label>
        <textarea
          rows={4}
          className="rounded-xl bg-parchment-100/70 px-4 py-3 shadow-insetLine outline-none focus:ring-2 focus:ring-brand-600/30"
          placeholder="Briefly describe the challenge, timeline, and desired outcome."
        />
      </div>
      <div className="flex items-center justify-between pt-2">
        <div className="text-[12px] text-ink-700/70">We’ll respond with next steps and an intake call.</div>
        <Button type="submit">Request Consultation</Button>
      </div>
    </form>
  )
}

export default function App() {
  const sectionIds = ['insight', 'brand-systems', 'influence', 'integrity', 'impact', 'ingenium', 'initiate']
  const activeId = useActiveSection(sectionIds)
  const [open, setOpen] = React.useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return (
    <div>
      <NavBar items={NAV} activeId={activeId} onInitiate={openModal} />

      <main>
        <HeroSection onInitiate={openModal} />
        <GlobalStrip />
        <InsightSection />
        <BrandSystemsSection />
        <InfluenceSection />
        <IntegritySection />
        <ImpactSection />
        <IngeniumSection />
        <InitiateSection onInitiate={openModal} />
      </main>

      <Footer />

      <Modal open={open} title="Initiate Strategic Engagement" onClose={closeModal}>
        <ConsultationForm onClose={closeModal} />
      </Modal>

      {/* Optional: quick dev helper */}
      <div className="sr-only">
        <Container>
          <a href="#top">Back to top</a>
        </Container>
      </div>
    </div>
  )
}
